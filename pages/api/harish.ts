import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  if (req.body.key !== 'helloworld') {
    return res.status(400).end()
  }
  res.status(200).json({ secret: 'How was that?' })
}
