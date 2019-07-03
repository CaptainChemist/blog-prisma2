FROM node:10.16.0

WORKDIR /app

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]