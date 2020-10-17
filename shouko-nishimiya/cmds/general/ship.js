const discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const owo = args[0]
  const uwu = args[1]
  const shiplevel = Math.floor(Math.random() * 100)
  const e = new discord.MessageEmbed()
  e.setDescription(`I give ${owo} and ${uwu}'s relationship a ${shiplevel}% :two_hearts:`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'ship',
  aliases: ['shipping', 'relationship']
}
