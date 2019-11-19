import { trim } from 'lodash'
import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

export default ({ children, className }: any) => {
  const language = (className || '').replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={trim(children)} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
