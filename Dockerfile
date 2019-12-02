FROM node:12.13.1-stretch

# replace this with your application's default port
EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn

# Bundle app source
COPY components components
COPY next-env.d.ts next-env.d.ts
COPY next.config.js .
COPY pages pages
COPY postcss.config.js postcss.config.js
COPY public public
COPY server server
COPY styles styles
COPY tailwind.config.js tailwind.config.js
COPY tsconfig.server.json .
COPY tsconfig.json .
COPY utils utils

RUN yarn build

CMD [ "yarn", "start" ]
