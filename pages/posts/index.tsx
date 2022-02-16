import { Layout } from 'components'
import { getAllPosts, PostMeta } from 'lib/server'
import Link from 'next/link'

type Props = {
  metas: PostMeta[]
}

export default function PostPage({ metas }: Props) {
  return (
    <Layout>
      <h1 className="py-8 text-center text-4xl">Posts</h1>
      <h2 className="py-8 text-2xl">React</h2>
      <Link href="/react/introduction">
        <a className="block py-2 text-blue-500 visited:text-indigo-700 hover:underline">
          Introduction to React
        </a>
      </Link>
      <h2 className="py-8 text-2xl">Other</h2>
      {metas.map(({ slug, title }) => (
        <Link href={`/posts/${slug}`} key={slug}>
          <a className="block py-2 text-blue-500 visited:text-indigo-700 hover:underline">
            {title}
          </a>
        </Link>
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const metas = await getAllPosts()
  return {
    props: {
      metas,
    },
  }
}
