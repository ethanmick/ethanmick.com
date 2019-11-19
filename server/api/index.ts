import Mercury from '@postlight/mercury-parser'
import express, { Request, Response } from 'express'
import { reverse, sortBy } from 'lodash'
import { connection, Link, MagicRank, Post, Star, Tweet } from '../models'
const multer = require('multer')
const upload = multer({ dest: '/tmp' })

const r = express.Router()
r.use(express.json())

r.get('/posts', async (_: any, res: any) => {
  let repo = connection().getRepository(Post)
  let posts = await repo.find()
  res.status(200).json(posts)
})

r.get('/feed', async (req: Request<any>, res: Response) => {
  const { q: query } = req.query
  console.log(query)

  const stars = await Star.findForFeed()
  const ranks = await MagicRank.findForFeed()
  const posts = await Post.findForFeed()
  const tweets = await Tweet.findForFeed()
  const links = await Link.findForFeed()

  res.json(
    reverse(
      sortBy([...stars, ...ranks, ...posts, ...tweets, ...links], 'createdAt')
    )
  )
})

r.post('/upload/link', async (req: Request<any>, res: Response) => {
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

r.post('/upload2', (req: any, res: Response) => {
  console.log('UPLOAD ', req.body)
  res.json({})
})

r.post('/upload', upload.single('data'), (req: Request<any>, res: Response) => {
  console.log('UPLOAD ', req.headers)
  console.log('UPLOAD', req.body)

  res.json({})
})

export const api = r
