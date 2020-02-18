FROM node:12.4.0-alpine

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && apk del .gyp \
    && mkdir -p /usr/src/app

USER node

ADD package.json /usr/src/app
ADD package-lock.json /usr/src/app

WORKDIR  /usr/src/app

EXPOSE 3000

CMD ["npm install"]