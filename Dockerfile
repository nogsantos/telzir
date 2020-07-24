FROM node:12-alpine

WORKDIR /api

COPY ./api/package*.json ./

RUN npm ci --only=prod

COPY ./api/ ./

CMD ["npm", "start"]
