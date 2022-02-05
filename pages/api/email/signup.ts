import formData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Body {
  email: string
  name?: string
}

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  if (!req.body.email) {
    return res.status(400).end()
  }
  const { email, name } = req.body as Body
  const mailgun = new Mailgun(formData)
  const client = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  })

  try {
    await client.lists.members.createMember(
      process.env.MAILGUN_EMAIL_LIST || '',
      {
        address: email,
        name: name,
        subscribed: true,
        upsert: 'yes',
      }
    )
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
    return
  }

  res.status(200).json({ success: true })
}
