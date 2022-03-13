import { randomBytes } from 'crypto'
import formData from 'form-data'
import { minify } from 'html-minifier'
import { parseError } from 'lib'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

const EMAIL_DOMAIN = process.env.EMAIL_DOMAIN || ''
const EMAIL_TO = process.env.EMAIL_TO || ''
const from = process.env.EMAIL_FROM || ''

export type Request = {
  password: string
  subject: string
  html: string
  test?: boolean
}

type Response = {
  error?: string
}

export default async function api(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  if (req.body.password != process.env.EMAIL_PASSWORD) {
    res.status(400).json({ error: 'Incorrect password' })
    return
  }
  if (!req.body.subject) {
    res.status(400).json({ error: 'Missing subject' })
    return
  }

  const mailgun = new Mailgun(formData)
  const client = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  })

  const { html: input, test, subject } = req.body as Request
  const html = minify(input, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    html5: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
  })

  const suffix = randomBytes(4).toString('hex')
  const [user, domain] = EMAIL_TO.split('@')

  const message = {
    from,
    subject,
    html,
  }

  const to = test ? `${user}+${suffix}@${domain}` : EMAIL_TO
  try {
    await client.messages.create(EMAIL_DOMAIN, {
      ...message,
      to,
    })
    res.status(200).json({})
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: parseError(error) })
  }
}
