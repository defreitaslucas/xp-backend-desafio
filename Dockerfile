FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run drop
RUN npm run prestart
CMD ["node", "index.js"]