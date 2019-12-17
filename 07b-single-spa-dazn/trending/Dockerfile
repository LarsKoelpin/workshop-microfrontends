FROM node:10.17.0-alpine
WORKDIR /usr/src/app
COPY ./server/package.json /usr/src/app
RUN npm install
COPY ./server /usr/src/app
CMD ["npm", "start"]
