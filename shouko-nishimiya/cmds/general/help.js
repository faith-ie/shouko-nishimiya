const discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const e = new discord.MessageEmbed()
  e.setTitle(`${client.user.username} help`)
  e.addField('Shipping', 'Ship your servermates!')
  e.addField('Yomomma', 'Get yo momma jokes!')
  e.addField('Catfact', 'Get a fact about cats!')
  e.addField('Rate', 'Rate a user on hotness!')
  e.addField('Dogfact', 'Get a fact about dogs!')
  e.addField('Ping', 'Pong!')
  e.addField('Penis', 'How big is your penis?')
  e.addField('Bible', 'Get bible verse!')
  e.addField('Stats', 'View Bot Stats!')
  e.addField('Help', 'This help command!')
  e.setColor('#03d7fc')
  e.setFooter('You can view my source code at https://github.com/Faith1sGay/shouko-nishimiya ❤')
  message.channel.send(e)
}
module.exports.info =
{
  name: 'help',
  aliases: ['h']
}
