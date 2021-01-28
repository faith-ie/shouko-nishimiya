FROM node:15.7.0-buster
WORKDIR /app/
COPY package.json /app/
COPY /shouko-nishimiya/ /app/
RUN cd /app/
RUN npm i - g yarn
RUN yarn set version latest
RUN yarn install
CMD ["npm", "start"]