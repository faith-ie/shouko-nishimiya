module.exports = client => {
  const discord = require('discord.js')
  const fs = require('fs')
  client.commands = new discord.Collection()
  client.aliases = new discord.Collection()
  fs.readdir(`${__dirname}/../cmds/`, (err, files) => {
    if (err) console.log(err)

    files.forEach(folder => {
      fs.readdir(`${__dirname}/../cmds/${folder}/`, (_err, command) => {
        const jsfile = command.filter(f => f.split('.').pop() === 'js')
        if (jsfile.length <= 0) {
          console.log('Command not found.')
          return
        }

        jsfile.forEach((f, i) => {
          const props = require(`${__dirname}/../cmds/${folder}/${f}`)
          console.log(`${f} loaded!`)
          client.commands.set(props.info.name, props)
          client.commands.set(props.info.aliases)
          if (props.info.aliases) props.info.aliases.forEach(a => client.commands.set(a, props))
          console.log(props)
        })
      })
    })
  })
}
