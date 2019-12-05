import { Star } from '../../server/models'
import { asCard, CardFooter, CardIcon } from './Card'

export const StarCard = (star: Star) => {
  const icon = <CardIcon icon="fad fa-star" color="text-green-500" />
  const title = (
    <a
      className="text-blue-500 hover:underline"
      href={`https://github.com/${star.fullName}`}
      target="_blank"
      rel="noopener"
    >
      {star.owner} / <span className="font-bold">{star.name}</span>
    </a>
  )
  const body = <div>{star.description}</div>
  const footer = (
    <CardFooter
      href="/star/[id]"
      as={`/star/${star.id}`}
      date={star.createdAt}
    />
  )
  return asCard({ icon, title, body, footer })
}
