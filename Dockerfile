FROM node:16
WORKDIR /app
RUN npm install
RUN npm run drop
RUN npm run prestart
COPY . .
CMD ["node", "index.js"]