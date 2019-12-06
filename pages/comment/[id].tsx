import { NextPageContext } from 'next'
import React from 'react'
import { CommentCard, Footer, Title } from '../../components'
import { Comment } from '../../server/models'
import { json } from '../../utils/api'

interface CommentPageProps {
  comment: Comment
}

const CommentPage = ({ comment }: CommentPageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <CommentCard {...(comment as any)} />
      <Footer />
    </div>
  )
}

CommentPage.getInitialProps = async ({
  query
}: NextPageContext): Promise<CommentPageProps> => {
  const { id } = query
  const comment = await json(`comment/${id}`)
  return { comment }
}

export default CommentPage
