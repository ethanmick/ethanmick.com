import { promises as fs } from 'node:fs'
import { join } from 'path'

export type Meta = {
  type: string
  title: string
  author: string
  slug: string
  excerpt: string
  createdAt: string
}

const postsDirectory = join(process.cwd(), 'pages/posts')

export const getPostSlugs = async (): Promise<string[]> => {
  const paths = await fs.readdir(postsDirectory)
  return paths.filter((p) => p !== 'index.tsx')
}

export const getPostMetaBySlug = async (slug: string): Promise<Meta> => {
  const { meta } = await import(`../pages/posts/${slug}`)
  return meta
}

export const getAllPosts = async (): Promise<Meta[]> => {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(slugs.map(getPostMetaBySlug))
  return posts
}
