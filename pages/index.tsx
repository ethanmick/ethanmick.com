import * as React from 'react'
import '../styles/index.css'
import fetch from 'isomorphic-unfetch'

export default class Home extends React.Component<any, any> {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
    return { posts }
  }

  render() {
    console.log(this.props.posts)
    return <div>hello</div>
  }
}
