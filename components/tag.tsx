import Link from 'next/link'
import { UrlObject } from 'url'

type Props = {
  className?: string
  tag: String
  href: UrlObject
}

export const Tag = ({ className, tag, href }: Props) => {
  return (
    <>
      <Link href={href}>
        <a className={className}>{tag}</a>
      </Link>
      <style jsx>{`
        a::before {
          content: '#';
        }
      `}</style>
    </>
  )
}
