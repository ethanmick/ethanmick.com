import { promises as fs } from 'node:fs'
import { join } from 'path'

export type RefMeta = {
  title: string
  slug: string
}

const refsDirectory = join(process.cwd(), 'pages/refs')

export const getRefSlugs = async (): Promise<string[]> => {
  const paths = await fs.readdir(refsDirectory)
  return paths.filter((p) => p !== 'index.tsx')
}

export const getRefMetaBySlug = async (slug: string): Promise<RefMeta> => {
  const { meta } = await import(`../pages/refs/${slug}`)
  return { ...meta, slug: slug.replace(/\.mdx$/, '') }
}

export const getAllRefsMeta = async (): Promise<RefMeta[]> => {
  const slugs = await getRefSlugs()
  const metas = await Promise.all(slugs.map(getRefMetaBySlug))
  return metas
}
