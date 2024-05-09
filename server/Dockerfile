FROM node:21

WORKDIR /app

COPY . .

RUN npm install

COPY .env.example .env

EXPOSE 5000

CMD ["npm","start"]
