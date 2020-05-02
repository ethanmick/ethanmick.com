import { Octokit } from '@octokit/rest'
import moment from 'moment'
import { github } from './config'
import { Star } from './models'

const octokit = new Octokit({
  auth: github.auth
})

export const checkStars = async () => {
  const username = github.username
  if (!username) {
    throw new Error(`invalid username: ${username}`)
  }
  const { data: stars } = await octokit.activity.listReposStarredByUser({
    username
  })
  for (let star of stars) {
    const found = await Star.findOne({
      id: star.id
    })
    if (found) {
      continue
    }
    const s = new Star()
    s.id = star.id
    s.name = star.name
    s.owner = star.owner.login
    s.fullName = star.full_name
    s.description = star.description
    s.url = star.url
    s.language = star.language || undefined
    s.forks = star.forks_count
    s.stargazersCount = star.stargazers_count
    s.lastUpdatedAt = moment.utc(star.pushed_at).toDate()
    s.createdAt = new Date()
    s.updatedAt = new Date()
    await s.save()
  }
}
