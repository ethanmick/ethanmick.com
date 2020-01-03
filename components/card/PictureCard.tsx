import React from 'react'
import { Picture, PictureSource } from '../../server/models'
import { asCard, CardFooter, CardIcon } from './Card'

export const PictureCard = (picture: Picture) => {
  const icon = <CardIcon icon="fad fa-camera" color="text-teal-400" />
  const body = (
    <div>
      {picture.src.map((pic: PictureSource, key: number) => (
        <figure key={key} className="text-center">
          <img src={pic.src} className="rounded shadow" />
          {pic.caption ?? <figcaption>{pic.caption}</figcaption>}
        </figure>
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
