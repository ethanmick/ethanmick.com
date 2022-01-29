const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/post',
        destination: '/posts',
        permanent: true,
      },
      {
        source: '/post/:path*',
        destination: '/posts/:path*',
        permanent: true,
      },
    ]
  },
})
