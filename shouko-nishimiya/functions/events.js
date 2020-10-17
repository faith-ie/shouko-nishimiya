const date = new Date()
const box = require('ascii-box').box
const { prefix } = require('f:/shouko-nishimiya/shouko-nishimiya/config.json')
module.exports = client => {
  client.on('message', async message => {
    if (message.author.bot) return
    if (message.channel.type === 'dm') return
    if (!message.content.startsWith(prefix)) return
    console.log(`Author: ${message.author.id} || ${message.author.username}`)
    console.log(`Server: ${message.guild.id} || ${message.guild.name}`)
    console.log(`Channel: ${message.channel.id} || ${message.channel.name}`)
    console.log(`Message: ${message.content} || Date: ${date}`)

    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()

    const commandfile = client.commands.get(command.toLowerCase())
    if (!commandfile) return
    commandfile.run(client, message, args)
  })

  client.on('ready', () => {
    console.log('Made by FVSAEZI#2700')
    console.log(`Logged in at ${date}`)
    console.log('Poggers.')
    console.log('Now Serving: ')
    console.log(
      box(
`Servers: ${client.guilds.cache.size}\n
Users: ${client.users.cache.size}\n`
      )
    )
    console.log('https://discord.com/oauth2/authorize?client_id=767047933572022294&scope=bot&permissions=18432')
    client.user.setActivity(`${prefix}help`)
  }
  )

  client.on('guildCreate', async (guild) => {
    const { id, name, memberCount } = guild
    console.log(`I have joined ${name} with the server id of ${id} that has ${memberCount} members!`)
  })
}
