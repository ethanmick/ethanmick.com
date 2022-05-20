import { Layout, PostedAt } from 'components'
import { Routes } from 'lib'
import { getAllPosts, PostMeta } from 'lib/server'
import { sortByCreatedAt } from 'lib/sort'
import Link from 'next/link'

const ReactLinks = [
  {
    href: Routes.ReactIntroduction,
    label: 'Introduction to React',
    createdAt: '2022-02-16T12:00:00.000Z',
  },
  {
    href: Routes.ReactGettingStarted,
    label: 'Getting Started with React & TypeScript',
    createdAt: '2022-02-24T12:00:00.000Z',
  },
  {
    href: Routes.ReactComponents,
    label: 'Learning Components',
    createdAt: '2022-03-04T12:00:00.000Z',
  },
  {
    href: Routes.ReactProperties,
    label: 'Passing data with properties',
    createdAt: '2022-03-11T12:00:00.000Z',
  },
  {
    href: Routes.ReactState,
    label: 'Managing State',
    createdAt: '2022-03-19T12:00:00.000Z',
  },
  {
    href: Routes.ReactLocalStorage,
    label: 'Local Storage',
    createdAt: '2022-03-25T12:00:00.000Z',
  },
  {
    href: Routes.ReactCompletingTodos,
    label: 'Completing Todos',
    createdAt: '2022-04-05T12:00:00.000Z',
  },
  {
    href: Routes.ReactEditingTodos,
    label: 'Marking to-dos as incomplete and editing',
    createdAt: '2022-04-22T12:00:00.000Z',
  },
  {
    href: Routes.ReactAddTailwind,
    label: 'Add Tailwind CSS',
    createdAt: '2022-05-06T12:00:00.000Z',
  },
  {
    href: Routes.ReactMigrateToTailwind,
    label: 'Migrate components to Tailwind CSS',
    createdAt: '2022-05-20T12:00:00.000Z',
  },
]

type Props = {
  metas: PostMeta[]
}

export default function PostPage({ metas }: Props) {
  return (
    <Layout>
      <h1 className="py-8 text-center text-4xl">Posts</h1>
      <h2 className="py-8 text-2xl">React</h2>
      <ol className="divide-y divide-gray-200">
        {ReactLinks.sort(sortByCreatedAt).map(({ href, label, createdAt }) => (
          <li key={label}>
            <Link href={href}>
              <a className="flex items-center py-3 text-blue-500 visited:text-indigo-700">
                <PostedAt at={createdAt} />
                <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">{label}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ol>
      <h2 className="py-8 text-2xl">Other</h2>
      <ol className="divide-y divide-gray-200">
        {metas.sort(sortByCreatedAt).map(({ slug, title, createdAt }) => (
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

export const getStaticProps = async () => {
  const metas = await getAllPosts()
  return {
    props: {
      metas,
    },
  }
}
