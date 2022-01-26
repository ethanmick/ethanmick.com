import { Card, Footer, Title } from '../components'

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-3xl px-2">
      <Title />
      {[].map((item: any, i: number) => (
        <Card key={i} {...item} className="mb-6 md:mb-10" />
      ))}
      <Footer />
    </div>
  )
}
