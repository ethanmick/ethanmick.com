import { NextPageContext } from 'next'
import React from 'react'
import { Footer, PictureCard, Title } from '../../components'
import { Picture } from '../../server/models'
import { json } from '../../utils/api'

interface PicturePageProps {
  picture: Picture
}

const PicturePage = ({ picture }: PicturePageProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4">
      <Title className="p-16" />
      <PictureCard {...(picture as any)} />
      <Footer />
    </div>
  )
}

PicturePage.getInitialProps = async ({
  query
}: NextPageContext): Promise<PicturePageProps> => {
  const { id } = query
  const picture = await json(`picture/${id}`)
  return { picture }
}

export default PicturePage
