FROM node:21

WORKDIR ./app

COPY . .

RUN npm install react-script

COPY .env.example .env

EXPOSE 3000

CMD ["npm","start","--","--host"]

