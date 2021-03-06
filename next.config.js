const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  publicRuntimeConfig: {
    API_ROOT: process.env.API_ROOT,
    ROOT_URL: process.env.ROOT_URL || 'https://ethanmick.com'
  },
  devIndicators: {
    autoPrerender: false
  }
})
