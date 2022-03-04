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
  <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
    {previous ? (
      <Link href={previous.href || ''}>
        <a className="flex items-center">
          <ChevronLeftIcon className="ml-2 h-6 w-6" />
          {previous.title}
        </a>
      </Link>
    ) : (
      <div />
    )}
    {next?.href && (
      <Link href={next.href || ''}>
        <a className="flex items-center justify-end">
          {next.title}
          <ChevronRightIcon className="h-6 w-6" />
        </a>
      </Link>
    )}
    {next && !next.href && (
      <div className="text-right md:col-start-2">
        <span className="flex items-center justify-end text-right">
          {next.title}
          <ChevronRightIcon className="h-6 w-6" />{' '}
        </span>
        <span className="text-sm">
          Coming Soon. Subscribe below for updates!
        </span>
      </div>
    )}
  </div>
)
