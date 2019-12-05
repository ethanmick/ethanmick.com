import React from 'react'
import { Picture } from '../../server/models'
import { asCard, CardFooter, CardIcon } from './Card'

export const PictureCard = (picture: Picture) => {
  const icon = <CardIcon icon="fad fa-camera" color="text-teal-400" />
  const body = (
    <div>
      {picture.src.map(src => (
        <img src={src} className="rounded shadow" />
      ))}
    </div>
  )
  const footer = (
    <CardFooter
      href="/picture/[id]"
      as={`/picture/${picture.id}`}
      date={picture.createdAt}
    />
  )
  return asCard({ icon, body, footer })
}
