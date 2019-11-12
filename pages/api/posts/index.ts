import { NextApiRequest, NextApiResponse } from 'next'
import { connection, Post } from '../../../models'

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    let repo = connection().getRepository(Post)
    let posts = repo.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
