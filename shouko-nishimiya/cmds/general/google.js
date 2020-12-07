const fetch = require('node-fetch')
const discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const query = args.slice(0).join(' ')
  fetch('www.google.com').then(search => search.text()).then(body => console.log(body))
}
module.exports.info =
{
  name: 'google',
  aliases: ['g', 'googlesearch']
}
