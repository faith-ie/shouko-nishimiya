FROM node:15.7.0-buster
WORKDIR /app/
COPY package.json /app/
COPY /shouko-nishimiya/ /app/
RUN yarn set version berry
RUN cd /app/
RUN yarn install
CMD ["yarn", "node", "index.js"]