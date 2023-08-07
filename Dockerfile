FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm i -g pnpm

COPY .env .
COPY pnpm-lock.yaml .
COPY package*.json .

RUN pnpm install

COPY . .

CMD [ "pnpm", "start" ]