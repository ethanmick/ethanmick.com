import fetch from 'isomorphic-unfetch'
import { map, reverse, sortBy } from 'lodash'
import * as React from 'react'
import { Card, Footer, Title } from '../components'

function importAll(r: any) {
  return r.keys().map(r)
}

const blog = importAll((require as any).context('./post', false, /.mdx$/))

export default class Home extends React.Component<any, any> {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/feed')
    let feed = await res.json()
    feed = reverse(sortBy([...feed, ...map(blog, 'meta')], 'createdAt'))
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
