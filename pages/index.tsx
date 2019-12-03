import { map, reverse, sortBy } from 'lodash'
import Head from 'next/head'
import * as React from 'react'
import { Card, Footer, Title } from '../components'
import { json } from '../utils/api'

function importAll(r: any) {
  return r.keys().map(r)
}

const blog = importAll((require as any).context('./post', false, /.mdx$/))

export default class Home extends React.Component<any, any> {
  static async getInitialProps() {
    const data = await json('feed')
    const feed = reverse(sortBy([...data, ...map(blog, 'meta')], 'createdAt'))
    return { feed }
  }

  render() {
    const { feed } = this.props
    return (
      <div className="container mx-auto max-w-3xl px-2">
        <Head>
          <meta name="Description" content="Personal blog for Ethan Mick." />
        </Head>
        <Title />
        {feed.map((item: any, i: number) => (
          <Card key={i} {...item} className="mb-6 md:mb-10" />
        ))}
        <Footer />
      </div>
    )
  }
}
