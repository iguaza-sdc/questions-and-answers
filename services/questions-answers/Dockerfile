FROM node:13.8-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app

RUN npm install

COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

COPY . /usr/src/app

CMD ["/usr/src/app/entrypoint.sh"]
