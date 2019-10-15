FROM node:10.16.0
RUN npm install -g --unsafe-perm prisma2@2.0.0-preview014.1

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

ARG MYSQL_URL
ENV MYSQL_URL "$MYSQL_URL"

RUN npm install
RUN prisma2 generate

CMD ["npm", "start" ]