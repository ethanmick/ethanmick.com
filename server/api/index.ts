import Mercury from '@postlight/mercury-parser'
import express, { Request, Response } from 'express'
import { reverse, sortBy } from 'lodash'
import { auth } from '../config'
import { Comment, Link, MagicRank, Picture, Star, Tweet } from '../models'

const checkAuth = (req: Request, _: Response, next: any) => {
  const { authorization = '' } = req.headers
  const [, token] = authorization.split(' ')
  if (token === auth.token) {
    return next()
  }
  throw new Error('unauthorized')
}

const r = express.Router()
r.use(express.json())

r.get('/feed', async (_: Request<any>, res: Response) => {
  const stars = await Star.findForFeed()
  const ranks = await MagicRank.findForFeed()
  const tweets = await Tweet.findForFeed()
  const links = await Link.findForFeed()
  const comments = await Comment.findForFeed()
  const pictures = await Picture.findForFeed()

  res.json(
    reverse(
      sortBy(
        [...stars, ...ranks, ...tweets, ...links, ...comments, ...pictures],
        'createdAt'
      )
    )
  )
})

const findEntityByClass = (klass: any) => async (
  req: Request<any>,
  res: Response
) => {
  try {
    const found = await klass.findOne(req.params.id)
    return res.json(found)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

r.get('/link/:id', findEntityByClass(Link))
r.get('/links', async (_, res: Response) => {
  const links = await Link.find({
    order: {
      createdAt: 'DESC'
    }
  })
  return res.json(links)
})

r.get('/star/:id', findEntityByClass(Star))

r.get('/tweet/:id', findEntityByClass(Tweet))

r.get('/rank/:id', findEntityByClass(MagicRank))

r.get('/comment/:id', findEntityByClass(Comment))

r.get('/picture/:id', findEntityByClass(Picture))

r.post('/upload/link', checkAuth, async (req: Request<any>, res: Response) => {
  const { link } = req.body
  try {
    const parsed = await Mercury.parse(link)
    const l = new Link()
    l.link = parsed.url
    l.title = parsed.title || undefined
    l.author = parsed.author || undefined
    l.datePublished = parsed.date_published || undefined
    l.leadImageUrl = parsed.lead_image_url || undefined
    l.domain = parsed.domain
    l.read = false
    l.createdAt = new Date()
    await l.save()
    res.json(l)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export const api = r
