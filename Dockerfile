FROM node:18

WORKDIR /myapp

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

RUN ["node","app.js" ]

