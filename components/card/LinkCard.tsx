import React from 'react'
import { Link } from '../../server/models'
import { asCard, CardFooter, CardIcon } from './Card'

export const LinkCard = (link: Link) => {
  const icon = <CardIcon icon="fad fa-link" color="text-indigo-500" />
  const title = (
    <span className="leading-none">
      <a
        className="mr-2 font-bold text-blue-500 hover:underline"
        href={link.link}
        target="_blank"
        rel="noopener"
      >
        {link.title}
      </a>
      <a
        href={link.domain}
        target="_blank"
        rel="noopener"
        className="text-gray-600 text-xs hover:underline"
      >
        ({link.domain})
      </a>
    </span>
  )
  const footer = (
    <CardFooter
      href="/link/[id]"
      as={`/link/${link.id}`}
      date={link.createdAt}
    />
  )
  return asCard({ icon, title, footer })
}
