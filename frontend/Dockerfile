FROM node

WORKDIR /home/node/app
COPY package-lock.json /home/node/app
COPY package.json /home/node/app

RUN npm install

CMD npm run dev