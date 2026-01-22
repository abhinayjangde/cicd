FROM node:24-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY src src/
COPY .env .env

EXPOSE 3000

RUN adduser --system nodejs

USER nodejs

CMD [ "npm", "run", "start" ]