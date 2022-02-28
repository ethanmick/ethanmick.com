import { DocumentTextIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import { pSBC } from 'lib'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'

type CodeProps = {
  children: string
  className?: string
}

export const Code = ({ children, className }: CodeProps) => {
  // We don't have every language, but the fallback is just no syntax
  // highlighting, and that is fine.
  const language = (className || '').replace(
    /language-/,
    ''
  ) as unknown as Language
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx('rounded', className)}
          style={{ ...style, padding: '20px' }}
        >
          <div className="relative">
            <div className="line-numbers pointer-events-none absolute left-0 block w-8">
              {tokens.map((_, i) => (
                <span
                  key={i}
                  className="block text-right text-slate-200 text-opacity-50"
                />
              ))}
            </div>
            <code className="relative block pl-14">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </div>
          <style jsx>{`
            .line-numbers > span {
              counter-increment: linenumber;
            }

            .line-numbers > span:before {
              content: counter(linenumber);
              font-size: 14.2222px;
              display: block;
              text-align: right;
              user-select: none;
            }
          `}</style>
        </pre>
      )}
    </Highlight>
  )
}

type CodeFileProps = {
  children: string
  language: Language
  file?: string
}

export const CodeFile = ({ children, language, file }: CodeFileProps) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <div
            className="flex items-center rounded-t-md p-1 px-4 text-slate-300"
            style={{
              backgroundColor: pSBC(-0.2, style.backgroundColor, false, true),
            }}
          >
            <DocumentTextIcon className="mr-2 h-4 w-4" />
            {file}
          </div>
          <pre
            className={cx(className, {
              '!mt-0 !rounded-none !rounded-b-md': !!file,
              rounded: !file,
            })}
            style={{ ...style, padding: '20px' }}
          >
            <div className="relative">
              <div className="line-numbers pointer-events-none absolute left-0 block w-8">
                {tokens.map((_, i) => (
                  <span
                    key={i}
                    className="block text-right text-slate-200 text-opacity-50"
                  />
                ))}
              </div>
              <code className="relative block pl-14">
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </div>
            <style jsx>{`
              .line-numbers > span {
                counter-increment: linenumber;
              }

              .line-numbers > span:before {
                content: counter(linenumber);
                font-size: 14.2222px;
                display: block;
                text-align: right;
                user-select: none;
              }
            `}</style>
          </pre>
        </>
      )}
    </Highlight>
  )
}
