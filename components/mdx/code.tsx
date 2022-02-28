import cx from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'

export const Code = ({ children, className }: any) => {
  const language = (className || '').replace(/language-/, '')
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
