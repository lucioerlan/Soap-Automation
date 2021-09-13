FROM node:16.9.1-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY . .

CMD ["npm", "start"]