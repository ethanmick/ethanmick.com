<p align="center">
  <a aria-label="Ethan Mick" href="https://ethanmick.com">
    <img src="https://raw.githubusercontent.com/ethanmick/ethanmick.com/master/public/favicon.png">
  </a>
</p>

<p align="center">
  <strong>
    <a aria-label="ethanmick.com" href="https://ethanmick.com">
      https://ethanmick.com
    </a>
  </strong>
</p>

## Motivation

My personal website has evolved a lot over the years. Most recently it has been a [Ghost](https://ghost.org/) blog, but the honest truth is that I just don't write blog posts that much. Even though I'm learning, coding, and playing, my blog doesn't reflect that. Most of my activities could probably be accurately reflected on Twitter, but having my own place on the Internet is still important to me. To that end, I've revamped my website to show more of my smaller activities.

### Technology

I'm using [Next.js](https://nextjs.org/). Next.js has a lot of great features out of the box that are important for my blog, server-side rendering, page prefetching, dynamic routing, and all the power of [React](https://reactjs.org/). The server is [Express](https://expressjs.com/), the database is [PostgreSQL](https://www.postgresql.org/), and it runs in a [Docker](https://www.docker.com/) container.

### Structure

My website captures content from several aspects of my life and centralizes it.

- Blog Posts
- Micro blog posts
- Pictures
- GitHub Stars
- Tweets
- Links to interesting websites
- Goals met in games

Each type of content has a card to describe it on the home page, and a permalink url so it can easily be linked to.

In the future, more types of content will be supported as well as different sections of the site dedicated to some of my interests. I'm thinking Magic: The Gathering, D&D, and other projects I'm currently working on.

## Development

To run the website locally, first setup the database.

```
cd db && docker build -t ethanmick/db .
```

And then run it:

```
docker run -p 5432:5432 -d --name ethanmick-db ethanmick/db
```

To start the website:

```
yarn dev
```

This will need access to all the environment variables below. So the actual command will look like:

```
TYPEORM_CONNECTION=postgres VAR_2= VAR_3= ..... yarn dev
```

## Deployment

### Building

The production build is made with `yarn build` and then started with `yarn start`. To make it easier to deploy the website, my production site is run inside a Docker container.

```
docker build -t ethanmick/website .
```

The docker image needs to be put in a hub to easily be run though, and since the entire website is open source on GitHub, I'm using GitHub's own hub. This means the name of the container is actually slightly different:

```
docker build -t docker.pkg.github.com/ethanmick/ethanmick.com/website:latest .
```

Once you are [logged in](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages#authenticating-to-github-packages) to GitHub's docker registry, you can push it:

```
docker push docker.pkg.github.com/ethanmick/ethanmick.com/website:latest
```

And then pull it down onto the server.

### Deployment

Site is currently in `/opt/ethanmick.com`

```
#!/bin/bash

cd /opt/ethanmick.com
docker pull docker.pkg.github.com/ethanmick/ethanmick.com/website:latest

echo 'stopping old website'
docker stop ethanmick
docker rm ethanmick

echo 'starting website'
docker run --restart=always --name ethanmick --env-file prod.env -p "3000:3000" -d docker.pkg.github.com/ethanmick/ethanmick.com/website:latest

echo 'deploy successful'
```

### Actions

I'm using [Github Actions](https://github.com/ethanmick/ethanmick.com/actions) to automate the build and deploy process.

### Environment Variables

```
TYPEORM_CONNECTION=postgres
TYPEORM_URL=postgres://postgres:test@localhost:5432/postgres
GITHUB_AUTH=tokenfromgithubhere
GITHUB_USERNAME=yourgithubusername
TWITTER_AUTH_CONSUMER_KEY=authkey
TWITTER_AUTH_CONSUMER_SECRET=secret
TWITTER_AUTH_ACCESS_TOKEN_KEY=token
TWITTER_AUTH_ACCESS_TOKEN_SECRET=tokensecret
AUTH_TOKEN=tokenforsecureaccess
API_ROOT=http://localhost:3000/api
ROOT_URL=http://localhost:3000
```
