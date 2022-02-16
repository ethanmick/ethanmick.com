import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

type Props = {
  previous?: {
    title: string
    href?: string
  }
  next?: {
    title: string
    href?: string
  }
}

export const ChapterFooter = ({ next, previous }: Props) => (
  <div className="flex">
    {previous && (
      <Link href={previous.href || ''}>
        <a className="flex items-center">
          {previous.title}
          <ChevronLeftIcon className="ml-2 h-6 w-6 min-w-fit" />
        </a>
      </Link>
    )}
    {!previous && <span className="flex grow" />}
    {next?.href && (
      <Link href={next.href || ''}>
        <a className="flex items-center">
          {next.title}
          <ChevronRightIcon className="h-6 w-6 min-w-fit" />
        </a>
      </Link>
    )}
    {next && !next.href && (
      <div>
        <span className="flex items-center">
          {next.title}
          <ChevronRightIcon className="h-6 w-6 min-w-fit" />{' '}
        </span>
        <span className="text-sm">
          Coming Soon. Subscribe below for updates!
        </span>
      </div>
    )}
  </div>
)
