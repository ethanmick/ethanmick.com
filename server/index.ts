import express from 'express'
import next from 'next'
import { api } from './api'
import { checkStars } from './github'
import { connection } from './models'
import { checkTweets } from './twitter'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const TIMER_DURATION = 120000 // 2 minutes

app.prepare().then(() => {
  connection()
  const server = express()

  setInterval(checkStars, TIMER_DURATION)
  setInterval(checkTweets, TIMER_DURATION)

  server.use('/public', express.static('public'))
  server.use('/api', api)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
