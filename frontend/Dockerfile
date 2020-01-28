FROM node:12.14.1-slim

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]