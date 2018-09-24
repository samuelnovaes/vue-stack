FROM alpine
RUN apk add --update nodejs npm
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
ENV NODE_ENV production
RUN npm install
COPY . /usr/src/app/
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]