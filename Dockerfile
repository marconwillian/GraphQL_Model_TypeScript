FROM node:12-alpine

ARG CACHEBUST=1

RUN mkdir -p /home/node/graphql-api/node_modules && mkdir -p /home/node/graphql-api/dist && chown -R node:node /home/node/graphql-api

WORKDIR /home/node/graphql-api

COPY package.json yarn.* ./

USER node

RUN yarn

RUN yarn autoclean --init

RUN yarn autoclean --force

COPY --chown=node:node . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "server"]
