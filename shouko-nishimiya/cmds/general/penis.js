const discord = require('discord.js')
const penisSize = ['8=D', '8==D', '8===D', '8====D', '8=====D', '8======D']
module.exports.run = async (client, message, args) => {
  const bigpenis = penisSize[Math.floor(Math.random() * penisSize.length)]
  const contestant = message.author.username
  const e = new discord.MessageEmbed()
  e.setDescription(`I give **${contestant}** a ${bigpenis} on the penis scale :open_mouth:`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'penis',
  aliases: ['howhungami', 'bigpenis']
}
