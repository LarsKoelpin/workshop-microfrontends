FROM node:10.17.0-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
COPY index.js /usr/src/app
CMD ["npm", "run", "start:prod"]
