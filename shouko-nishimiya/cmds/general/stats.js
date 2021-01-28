const discord = require('discord.js')
const djs = require('discord.js').version
const usedMem = process.memoryUsage().rss
const totalMem = Math.ceil(require('os').totalmem() * 100) / 100
const seconds = process.uptime()
const { botVersion, clientId, owners } = require('../../config.json')
module.exports.run = async (client, message, args) => {
  const e = new discord.MessageEmbed()
  e.setTitle(`${client.user.username} v${botVersion}`)
  e.addField('Author', 'FVSAEZI#2700')
  e.addField('Bot Id', `${clientId}`)
  e.addField('Memory', '**' + usedMem / 1e+6 + '**' + 'mb' + ' / ' + '**' + totalMem / 1e+6 + '**' + 'mb')
  e.addField('Owner IDs', `${owners}`)
  e.addField('Uptime', seconds)
  e.addField('Discord.js Version', djs)
  e.addField('Presence', `${client.guilds.cache.size} Servers\n${client.channels.cache.size} Channels\n${client.users.cache.size} Users`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'stats'
}
