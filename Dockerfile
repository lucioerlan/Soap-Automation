FROM node:12.22.6-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY . .

CMD ["npm", "start"]