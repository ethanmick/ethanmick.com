import { Layout, PostedAt, Tag } from 'components'
import { Routes } from 'lib'
import { getAllPosts, PostMeta } from 'lib/server'
import { sortByCreatedAt } from 'lib/sort'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const tagsFromMeta = (metas: PostMeta[], remove: string[]): string[] =>
  [
    ...new Set(
      metas
        .map((m) => m.tags)
        .flat()
        .filter((t) => t && !remove.includes(t))
    ),
  ].sort()

type TagProps = {
  tags: string[]
}

const Tags = ({ tags }: TagProps) => {
  return (
    <div className="flex justify-center gap-2 text-lg">
      {tags.map((t) => (
        <Tag key={t} tag={t} href={{ href: Routes.Posts, query: { tag: t } }} />
      ))}
    </div>
  )
}

type Props = {
  metas: PostMeta[]
}

export default function PostPage({ metas }: Props) {
  const router = useRouter()
  const tag = router.query.tag as string
  const tags = tagsFromMeta(metas, tag ? [tag] : [])
  return (
    <Layout>
      <h1 className="py-8 text-center text-4xl">
        Posts
        {tag ? <Tag className="text-rose-500" tag={tag} href={{ href: Routes.Posts }} /> : null}
      </h1>
      <Tags tags={tags} />
      <ol className="divide-y divide-gray-200 py-8">
        {metas
          .sort(sortByCreatedAt)
          .filter(({ tags }) => !tag || (tags || []).includes(tag))
          .map(({ slug, title, createdAt }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a className="flex items-center py-3 text-blue-500 visited:text-indigo-700">
                  <PostedAt at={createdAt} />
                  <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</h2>
                </a>
              </Link>
            </li>
          ))}
      </ol>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const metas = await getAllPosts()
  return {
    props: {
      metas,
    },
  }
}
