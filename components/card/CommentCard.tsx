import Markdown from 'markdown-to-jsx'
import React from 'react'
import { Comment } from '../../server/models'
import { asCard, CardFooter, CardIcon } from './Card'

export const CommentCard = (comment: Comment) => {
  const icon = <CardIcon icon="fal fa-comment" color="text-blue-500" />
  const body = <Markdown className="comment">{comment.body}</Markdown>
  const footer = (
    <CardFooter
      href="/comment/[id]"
      as={`/comment/${comment.id}`}
      date={comment.createdAt}
    />
  )
  return asCard({ icon, body, footer })
}
