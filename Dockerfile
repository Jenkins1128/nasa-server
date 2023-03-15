FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . /app

USER node

CMD [ "npm", "start" ]

EXPOSE 8000