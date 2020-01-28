FROM node:12.14.1-slim
RUN apt-get -qy update && apt-get -qy install openssl
RUN npm install -g --unsafe-perm prisma2@2.0.0-preview020.3

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD prisma2 studio --experimental