import fetch from 'isomorphic-unfetch'
import * as React from 'react'
import { Card, Footer, Title } from '../components'

export default class Home extends React.Component<any, any> {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/feed')
    const feed = await res.json()
    return { feed }
  }

  render() {
    const { feed } = this.props
    return (
      <div className="container mx-auto max-w-3xl px-2">
        <Title />
        {feed.map((item: any, i: number) => (
          <Card key={i} {...item} className="mb-6 md:mb-10" />
        ))}
        <Footer />
      </div>
    )
  }
}
