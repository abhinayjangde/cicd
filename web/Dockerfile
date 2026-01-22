FROM node:24-alpine

WORKDIR /app

COPY package*.json .
COPY eslint.config.js .
COPY vite.config.js .

RUN npm install 

COPY src src/
COPY public public/
COPY .env .env
COPY index.html .


RUN adduser --system nodejs && chown -R nodejs /app
USER nodejs

RUN npm run build

EXPOSE 4173

CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0"]