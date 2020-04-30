import express from 'express'
import next from 'next'
import { api } from './api'
import { checkStars } from './github'
import log from './log'
import { connection } from './models'
import { checkTweets } from './twitter'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const TIMER_DURATION = 120000 // 2 minutes

const wrap = (msg: string, fn: () => any) => async () => {
  try {
    await fn()
  } catch (err) {
    // err is an array from the Twitter client for idiotic reasons
    // We mostly don't care about all the errors, just the first is fine
    if (Array.isArray(err)) {
      err = err[0]
    }
    log.error(`${msg}: ${err.message}`)
  }
}

const main = async () => {
  log.info('Starting up...')
  try {
    await app.prepare()
    await connection()

    setInterval(wrap('error fetching stars', checkStars), TIMER_DURATION)
    setInterval(wrap('error getting tweets', checkTweets), TIMER_DURATION)

    const server = express()
    server.use('/public', express.static('public'))
    server.use('/api', api)

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    // TODO: Promisify later
    server.listen(port, (err: Error) => {
      if (err) throw err
      log.info(`Ready on http://localhost:${port}`)
    })
  } catch (err) {
    log.error(`Error starting server ${err.message}`)
  }
}
main()
