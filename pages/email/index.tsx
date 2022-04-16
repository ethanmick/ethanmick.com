import { evaluateSync } from '@mdx-js/mdx'
import * as reactProvider from '@mdx-js/react'
import { MDXProvider } from '@mdx-js/react'
import EmailToggle, { ToggleOptions } from 'components/email/email-toggle'
import { Callout } from 'components/react'
import { Request } from 'pages/api/email/send'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import * as runtime from 'react/jsx-runtime'

const components = {}

const defaultStyles: { [k: string]: string[] } = {
  textAlign: ['left', 'start'],
  letterSpacing: ['normal'],
}

const commonStyles = [
  'fontSize',
  'fontWeight',
  'textAlign',
  'color',
  'padding',
  'margin',
  'lineHeight, letterSpacing',
]

const StylesPerElement: any = {
  h1: [...commonStyles],
  h2: [...commonStyles],
  h3: [...commonStyles],
  h4: [...commonStyles],
  h5: [...commonStyles],
  h6: [...commonStyles],
  p: [...commonStyles],
  strong: [...commonStyles],
  em: [...commonStyles],
  hr: [...commonStyles],
  blockquote: [
    ...commonStyles,
    'borderLeft',
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor',
  ],
  a: [...commonStyles],
  ul: [...commonStyles],
  ol: [...commonStyles],
  li: [...commonStyles],
  img: ['width', 'height', 'alt', ...commonStyles],
  pre: ['backgroundColor', 'overflowX', 'borderRadius', ...commonStyles],
  code: [...commonStyles],
  aside: [...commonStyles, 'backgroundColor'],
}

const options: ToggleOptions[] = [
  {
    title: 'Test Email',
    value: 'test',
    description: 'Send a test email to the author only.',
    current: true,
  },
  {
    title: 'Send Email',
    value: 'send',
    description: 'Send an email to the mailing list.',
    current: false,
  },
]

const getCSS = (e: HTMLElement) => {
  const tag = e.tagName.toLowerCase()
  const css = getComputedStyle(e)
  const styles: Partial<CSSStyleDeclaration> = {}
  for (const [key, value] of Object.entries(css)) {
    if (StylesPerElement[tag]?.includes(key) && !defaultStyles[key]?.includes(value)) {
      styles[key as any] = value
    }
  }
  return styles
}

const recurseNodes = (e: HTMLElement) => {
  const children = e.children as HTMLCollectionOf<HTMLElement>
  Array.from(children).forEach((e: HTMLElement) => {
    recurseNodes(e)
    const style = getCSS(e)
    for (const [key, value] of Object.entries(style)) {
      e.style[key as any] = value as string
    }
  })
  // Fix markdown new lines
  Array.from(e.childNodes).forEach((n) => {
    if (
      n.nodeType === Node.TEXT_NODE &&
      n.parentNode?.nodeName !== 'PRE' &&
      n.parentNode?.nodeName !== 'CODE'
    ) {
      n.textContent = (n.textContent || '').replace(/[\r\n]/g, ' ')
    }
  })
}

// TODO: Find the same root div
const getRoot = (): HTMLElement => {
  // get the root from id 'email-root' or create it if it doesn't exist
  const root = document.getElementById('email-root')
  if (root) {
    // delete all children
    root.replaceChildren()
    return root
  }

  var div = document.createElement('div')
  div.id = 'email-root'
  div.style.display = 'none'
  div.className = 'prose prose-a:text-blue-600'
  document.getElementsByTagName('body')[0].appendChild(div)
  return div
}

type HeaderProps = {
  onSubmit: (test: boolean) => void
  url: string
  setURL: (url: string) => void
  subject: string
  setSubject: (subject: string) => void
}

const Header = ({ onSubmit, url, setURL, subject, setSubject }: HeaderProps) => {
  const [option, setOption] = useState(options[0])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(option.value === 'test')
  }

  return (
    <header className="shadow">
      <form className="flex items-center gap-8 p-4" onSubmit={handleSubmit}>
        <div className="text-2xl italic">Email</div>
        <div className="w-96">
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            name="subject"
            id="subject"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Email Subject"
            required
          />
        </div>
        <div className="w-96">
          <label htmlFor="url" className="sr-only">
            Blog URL
          </label>
          <input
            value={url}
            onChange={(e) => setURL(e.target.value)}
            type="text"
            name="url"
            id="url"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Blog URL"
            required
          />
        </div>
        <span className="flex-grow" />
        <EmailToggle options={options} onClick={setOption} />
      </form>
    </header>
  )
}

export default function EmailPage() {
  const [subject, setSubject] = useState('')
  const [url, setURL] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const [markdown, setMarkdown] = useState('')

  let Email: any
  try {
    const { default: content } = evaluateSync(markdown, {
      ...reactProvider,
      ...runtime,
    })
    Email = content
  } catch {}

  const onSend = async (test: boolean) => {
    if (!ref.current) {
      return
    }
    const password = prompt('Enter password') || ''
    const root = getRoot()
    root.appendChild(ref.current.cloneNode(true))
    recurseNodes(root)
    const html = template(subject, root.innerHTML)
    const body: Request = {
      html,
      password,
      subject,
      test,
    }
    const res = await fetch('/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    if (res.status === 200) {
      toast.success(`${test ? 'Test email' : 'Email'} sent successfully`)
    } else {
      toast.error(`Error sending email: ${data.error}`)
    }
  }

  return (
    <>
      <Header
        onSubmit={onSend}
        url={url}
        setURL={setURL}
        subject={subject}
        setSubject={setSubject}
      />
      <div className="body-height grid grid-cols-2 gap-4 p-4">
        <textarea
          className="h-full rounded border p-4"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div className="overflow-y-auto">
          <MDXProvider
            components={
              (() => ({
                Callout,
              })) as any
            }
          >
            <article className="prose mx-auto prose-a:text-blue-600">
              <center ref={ref}>
                <table
                  style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tbody>
                    <tr>
                      <td width="100%" style={{ textAlign: 'left' }}>
                        <p>Hi there 👋,</p>
                        <p>
                          To each of you who subscribed, I want to say thank you. It means so much
                          to me that you support me in this small way. If you have any feedback,
                          please let me know!
                        </p>
                        <p>
                          You&apos;re getting this email because you subscribed to my weekly
                          newsletter. I write about React, Next.js, TypeScript, web development, and
                          ways to become a better engineer.
                        </p>
                        <p>Enjoy!</p>
                        <p style={{ textAlign: 'center' }}>
                          <a href={url}>View Online →</a>
                        </p>
                        <hr className="my-8" />
                        {Email && <Email />}
                        <hr className="my-8" />
                        <p>
                          If you&apos;re not getting value out of these posts, please consider
                          unsubscribing. No hard feelings!
                        </p>
                        <p>
                          However, if you are enjoying this newsletter, the best compliment is to
                          share my <a href="https://ethanmick.com">website</a> or follow me on{' '}
                          <a href="https://twitter.com/ethan_mick">Twitter.</a>
                        </p>
                        <p>
                          <a href="%unsubscribe_url%" target="_blank">
                            Unsubscribe
                          </a>
                          &nbsp;| Sent by Ethan Mick
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </article>
          </MDXProvider>
        </div>
      </div>
      <style jsx>
        {`
          .body-height {
            height: calc(100vh - 70px);
          }
        `}
      </style>
    </>
  )
}

const template = (title: string, content: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${title}</title>
  </head>
  <body>
  ${content}
  </body>
</html>`
