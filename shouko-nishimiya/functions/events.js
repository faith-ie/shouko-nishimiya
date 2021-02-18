const fs = require('fs')
const djs = require('discord.js').version
const box = require('ascii-box').box
const { prefix, clientId, botVersion } = require('../config.json')
const { blacklistedUsers, blacklistedChannels, blacklistedServers } = require('../blacklists.json')
module.exports = client => {
  client.on('message', async message => {
    if (message.author.bot) return
    if (blacklistedUsers.includes(message.author.id)) return
    if (blacklistedChannels.includes(message.channel.id)) return
    if (!message.guild) return
    if (blacklistedServers.includes(message.guild.id)) return
    if (!message.content.startsWith(prefix)) return
    console.log(`Author: ${message.author.id} || ${message.author.username}`)
    console.log(`Server: ${message.guild.id} || ${message.guild.name}`)
    console.log(`Channel: ${message.channel.id} || ${message.channel.name}`)
    console.log(`Message: ${message.content} || Date: ${message.createdAt}`)
    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()
    const commandfile = client.commands.get(command.toLowerCase())
    if (!commandfile) return
    commandfile.run(client, message, args)
  })

  client.on('ready', () => {
    console.log('Connected to Discord... Getting Ready!')
    console.log(' _____ _                 _           _   _ _     _     _           _            ')
    console.log('/  ___| |               | |         | $ | (_)   | |   (_)         (_)            '.replace(/\$/g, '\\'))
    console.log('$ `--.| |__   ___  _   _| | _____   |  $| |_ ___| |__  _ _ __ ___  _ _   _  __ _ '.replace(/\$/g, '\\'))
    console.log(" `--. $ '_ $ / _ $| | | | |/ / _ $  | . ` | / __| '_ $| | '_ ` _ $| | | | |/ _` |".replace(/\$/g, '\\'))
    console.log('/$__/ / | | | (_) | |_| |   < (_) | | |$  | $__ $ | | | | | | | | | | |_| | (_| |'.replace(/\$/g, '\\'))
    console.log('$____/|_| |_|$___/ $__,_|_|$_$___/  $_| $_/_|___/_| |_|_|_| |_| |_|_|$__, |$__,_|'.replace(/\$/g, '\\'))
    console.log('                                                                      __/ |      ')
    console.log('                                                                     |___/       ')
    console.log('Made by FVSAEZI#2700')
    console.log(
      box(
        `${client.user.tag}\n
Prefix: ${prefix}\n
Bot Version: ${botVersion}\n
Discord.js Version: ${djs}\n        
Servers: ${client.guilds.cache.size}\n
Users: ${client.users.cache.size}\n`
      )
    )

    console.log(`Invite URL: https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=18432`)
    client.user.setActivity(`${prefix}help`)
  }
  )
  client.on('error', async err => {
    fs.writeFile('Errors.log', err)
  })
  client.on('guildCreate', async (guild) => {
    const { id, name, memberCount } = guild
    console.log(`I have joined ${name} with the server id of ${id} that has ${memberCount} members!`)
  })
}
