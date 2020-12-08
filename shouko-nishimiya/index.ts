import { Client } from 'discord.js'
import { token, Topgg } from './config.json'
import * as topgg from '@top-gg/sdk' // I have to use npm because berry is stinky and didn't publish to yarn
const api = new topgg.Api(Topgg)
const client = new Client()
setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    shardCount: client.options.shardCount
  })
}, 1800000)
require('./functions/events')(client)
require('./functions/func.js')(client)
client.login(token)
