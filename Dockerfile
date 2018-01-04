FROM node:9

RUN mkdir -p /var/app
COPY ./package.json /var/app/package.json
WORKDIR /var/app/
RUN npm install
COPY . /var/app/

EXPOSE 2999
CMD [ "node", "app.js" ]
