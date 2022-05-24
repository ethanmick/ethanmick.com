import { Layout, PostedAt } from 'components'
import { getAllPosts, PostMeta } from 'lib/server'
import { sortByCreatedAt } from 'lib/sort'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'

type Props = {
  tag: string
  metas: PostMeta[]
}

const Tag: NextPage<Props> = ({ tag, metas }) => {
  return (
    <Layout>
      <h1 className="py-8 text-center text-4xl">#{tag}</h1>
      <ol className="divide-y divide-gray-200">
        {metas
          .filter(({ tags }) => tags.includes(tag as string))
          .sort(sortByCreatedAt)
          .map(({ slug, title, createdAt }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a className="flex items-center py-3 text-blue-500 visited:text-indigo-700">
                  <PostedAt at={createdAt} />
                  <span className="ml-4">{title}</span>
                </a>
              </Link>
            </li>
          ))}
      </ol>
    </Layout>
  )
}

export default Tag

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string
  const metas = await (await getAllPosts()).filter(({ tags }) => (tags || []).includes(tag))
  return {
    props: {
      tag,
      metas,
    },
  }
}

export async function getStaticPaths() {
  const metas = await getAllPosts()
  const paths = metas
    .map(({ tags }) => tags)
    .flat()
    .filter((tag) => !!tag)
    .map((tag) => ({
      params: { tag },
    }))
  return {
    paths,
    fallback: false,
  }
}
