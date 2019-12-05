<p align="center">
  <a aria-label="Ethan Mick" href="https://ethanmick.com">
    <img src="https://raw.githubusercontent.com/ethanmick/ethanmick.com/master/public/favicon.png">
  </a>
  <a aria-label="Ethan Mick" href="https://ethanmick.com">
    <h3>https://ethanmick.com</h3>
  </a>
</p>

My website isn't working for me. Here's what I wnat my website to do:

1. A place for my multiple projects/facets
2. A place for my content from other websites
   Twitter/GitHub stars/gitlab stars/reddit posts
   I want control over it though, only kinda show the good stuff
3. I can write longer form posts
4. Track _links_ that I want to read, or have read. I don't want a post about them, I kinda just want
   a linked list. Something to track that I've read it, thought it was interesting, and moved on.
5. Pictures from games/minecraft.
6. Books I've read, same sort of thing.
7. A little more minimalistic.

Okay, so i want to read something on my phone/ipad, and post the link, OR save it for later.
Fire off a request.

Can't be totally static file.

Need Postgres and an authenticated API (basica uth) for links.

And content written could be from a static file and generated.

I don't really write on the go, so that's not a problem.

# URL structure

/ root
/:type/unique-slug Post

There are two keys

1. Category. Magic, D&D, Life, SE, Game dev, etc.
2. Type, is this a blog post, tweet, star, etc.

The user can probably filter on either, although I'll mostly
be filtering on category.

Categories could also have their own sub domains.

`mtg|magic.ethanmick.com`
`dnd.ethanmick.com`, etc

# Data Model

Posts
Links
Tweets
Stars

TYPEORM_CONNECTION=postgres \
TYPEORM_URL=postgres://postgres:test@localhost:5432/postgres \
GITHUB_AUTH=tokenfromgithubhere \
GITHUB_USERNAME=yourgithubusername \
TWITTER_AUTH_CONSUMER_KEY=authkey \
TWITTER_AUTH_CONSUMER_SECRET=secret \
TWITTER_AUTH_ACCESS_TOKEN_KEY=token \
TWITTER_AUTH_ACCESS_TOKEN_SECRET=tokensecret \
yarn dev

# TypeScript Next.js example

This is a really simple project that show the usage of Next.js with TypeScript.

## Setup

1. new server
2. setup postgres
3. add schema
4. install nginx
5. how are we running this?
6. DOCKER??

## How to use it?

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript
cd with-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## The idea behind the example

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declaratons for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
