const discord = require('discord.js')
const ratings = ['0/10', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10']
module.exports.run = async (client, message, args) => {
  const howCute = ratings[Math.floor(Math.random() * ratings.length)]
  const cutie = args[0]
  const e = new discord.MessageEmbed()
  e.setDescription(`I give ${cutie} a ${howCute} on the cuteness scale :heart_eyes:`)
  e.setColor('#03d7fc')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'rate',
  aliases: ['howcute', 'rategirl', 'ratewaifu']
}
