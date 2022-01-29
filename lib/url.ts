export const Protocol = !!process.env.NEXT_PUBLIC_VERCEL_URL
  ? 'https://'
  : 'http://'

export const RootURL = `${Protocol}${
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_ROOT_URL
}`
