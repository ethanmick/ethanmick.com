export default {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // swcMinify: true,
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
      {
        source: '/getting-started-with-curl',
        destination: '/posts/getting-started-with-curl/',
        permanent: true,
      },
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
          },
        },
      ],
    })

    return config
  },
}
