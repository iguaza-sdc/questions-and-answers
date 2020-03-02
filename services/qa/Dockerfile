FROM node:13.8.0-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/

RUN npm install
RUN npm install --global nodemon

COPY . /usr/src/app

EXPOSE 5000

CMD ["npm", "run", "dev"]
