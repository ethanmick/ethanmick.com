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

export const database = {
  type: process.env.TYPEORM_CONNECTION || '',
  url: process.env.TYPEORM_URL || '',
  database: process.env.TYPEORM_DATABASE || '',
  logging: process.env.TYPEORM_LOGGING === 'true',
  ssl:
    process.env.TYPEORM_SSL === 'true'
      ? {
          rejectUnauthorized: process.env.TYPEORM_REJECT_UNAUTHORIZED === 'true'
        }
      : false
}
