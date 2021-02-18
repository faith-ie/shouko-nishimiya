const discord = require('discord.js')
const { token, topgg } = require('./config.json')
const client = new discord.Client()
const topGG = require('@top-gg/sdk')
const api = new topGG.Api(topgg)
setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    shardCount: client.ws.shards.size
  })
}, 2700000)
require('./functions/func.js')(client)
require('./functions/events.js')(client)
client.login(token)
