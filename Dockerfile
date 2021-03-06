FROM node:boron

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 3000

CMD [ "npm", "start" ]
