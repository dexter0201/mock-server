FROM node:16.6.1

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

ENV NODE_ENV production
RUN npm install

COPY --chown=node:node db db
COPY --chown=node:node server.js server.js

EXPOSE 9002

CMD [ "npm", "run", "start-custom" ]
