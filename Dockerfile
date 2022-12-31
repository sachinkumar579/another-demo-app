FROM node:14

WORKDIR /app

COPY . . 

RUN npm install
RUN npm run build

CMD npm run server:prod

EXPOSE 8081