FROM node:24-alpine

WORKDIR /app

COPY package*.json .
COPY eslint.config.js .
COPY vite.config.js .

RUN npm install 

COPY src src/
COPY public public/
COPY index.html .

ENV VITE_API_URL=http://localhost:3000

RUN adduser --system nodejs && chown -R nodejs /app
USER nodejs

RUN npm run build

EXPOSE 4173

CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0"]