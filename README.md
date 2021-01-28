# shouko-nishimiya

Okay so I think it's finally time to tell you guys how to host it and set it up.

There are a couple different ways on how to host the bot.

# Prerequisites
- Computer
   or 
- Docker

- Git (https://git-scm.com/)
- Node.js ^15.7.0 (latest at the time of writing)


# How to set up
1. install node.js (https://nodejs.org/en/)
2. open up your terminal and go folder or drive you want to clone the repo in
3. ```git clone https://https://github.com/Faith1sGay/shouko-nishimiya.git```
4. type ```npm i -g yarn```
5. go into the repo that you cloned and fill out the config file (located at shouko-nishimiya/config.json.example)
6. once all the config fields are filled out, delete the .example ending so the file will now be named config.json
7. go into the main folder (not the one where the config file is located, its the one above that)
8. type ```yarn set version latest```
9. type ```yarn install```
10. once that is done, you have two options, running it with PM2 or just running the file normally.
11. to run it normally, type ```npm start``` or to run it with PM2 type ```npm pm2```



# Set up with Docker
1. download docker (https://www.docker.com/)
2. clone the repo
3. set up the config file like you would if you were running it without docker
4. go back to the main folder (the one above the config file)
5. type ```docker-compose build```
6. once it's done building, type ```docker-compose up```
7. Enjoy!