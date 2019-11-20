export const github = {
  auth: process.env.GITHUB_AUTH,
  username: process.env.GITHUB_USERNAME
}

export const twitter = {
  auth: {
    consumer_key: process.env.TWITTER_AUTH_CONSUMER_KEY || '',
    consumer_secret: process.env.TWITTER_AUTH_CONSUMER_SECRET || '',
    access_token_key: process.env.TWITTER_AUTH_ACCESS_TOKEN_KEY || '',
    access_token_secret: process.env.TWITTER_AUTH_ACCESS_TOKEN_SECRET || ''
  }
}

export const auth = {
  token: process.env.AUTH_TOKEN
}
