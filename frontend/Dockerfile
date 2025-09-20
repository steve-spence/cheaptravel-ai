FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 4200

CMD ["npm", "run", "dev"]