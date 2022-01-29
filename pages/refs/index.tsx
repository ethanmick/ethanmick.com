import { Layout } from 'components'
import { getAllRefsMeta, RefMeta } from 'lib'
import Link from 'next/link'

type Props = {
  metas: RefMeta[]
}

export default function RefsPage({ metas }: Props) {
  return (
    <Layout>
      <h1 className="py-8 text-center text-4xl">References</h1>
      {metas.map(({ slug, title }) => (
        <Link href={`/refs/${slug}`} key={slug}>
          <a className="block py-2 text-blue-500 visited:text-indigo-700 hover:underline">
            {title}
          </a>
        </Link>
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const metas = await getAllRefsMeta()
  return {
    props: {
      metas,
    },
  }
}
