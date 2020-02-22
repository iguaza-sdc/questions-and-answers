FROM node:13.8.0-alpine as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install
RUN npm install react-scripts@latest --global --silent

ARG REACT_APP_QA_URL
ENV REACT_APP_QA_URL $REACT_APP_QA_URL

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/app

CMD ["npm", "start"]
