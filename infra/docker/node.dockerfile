FROM node:10.0.0
ENV NODE_ENV=development
WORKDIR /var/www
ENTRYPOINT ["npm", "start"]
EXPOSE 3000