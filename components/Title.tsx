import Link from 'next/link'
import * as React from 'react'

export interface TitleProps {
  className?: string
}

export const Title = ({ className }: TitleProps) => (
  <div className={className ? className : 'py-20'}>
    <Link href="/">
      <a className="hover:underline">
        <h1 className="text-4xl text-center">Ethan Mick</h1>
      </a>
    </Link>
  </div>
)
