import moment from 'moment'
import Twitter from 'twitter'
import { twitter } from './config'
import { Tweet } from './models'

var client = new Twitter(twitter.auth)

export const checkTweets = async () => {
  const tweets = (await client.get('statuses/user_timeline', {})) as any
  for (let truncatedTweet of tweets) {
    const saved = await Tweet.findOne({ id: truncatedTweet.id_str })
    // All the reasons we may not want to save this tweet.
    if (
      saved ||
      truncatedTweet.retweeted ||
      truncatedTweet.in_reply_to_status_id_str
    ) {
      continue
    }
    const tweet = await client.get(`statuses/show/${truncatedTweet.id_str}`, {
      tweet_mode: 'extended'
    })
    const t = new Tweet()
    t.id = tweet.id_str
    t.text = tweet.full_text
    t.entities = tweet.entities
    t.userName = tweet.user.name
    t.userScreenName = tweet.user.screen_name
    t.userProfileImageUrl = tweet.user.profile_image_url_https

    // This date format is bullshit.
    //created_at: 'Fri May 31 14:19:56 +0000 2019',
    t.createdAt = moment
      .utc(tweet.created_at, 'ddd MMM DD HH:mm:ss ZZZZZ YYYY')
      .toDate()
    await t.save()
  }
}
