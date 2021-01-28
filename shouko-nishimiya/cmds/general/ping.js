const d = require('discord.js')
module.exports.run = async (client, message, args) => {
  const e = new d.MessageEmbed()
    .setAuthor('Shard Pings', client.user.avatarURL())
    .setDescription('Results')
    .setColor('#03d7fc')
  for (let i = 0; i < client.ws.shards.size; i++) {
    const p = client.ws.ping
    e.addField(`Shard ${i}`, '```js\n' + Math.floor(p) + 'ms```', true)
  }
  message.channel.send(e)
}
module.exports.info =
{
  name: 'ping'
}
