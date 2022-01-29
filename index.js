const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
    if (message.content == "bye"){
        message.reply("Bye!")
    }
    if (message.content == "Ohayou"){
        message.reply("Ohayou!")
    }
    if (message.content == "Oyasumi"){
        message.reply("Oyasumi!")
    }
    if (message.content == "Yahallo"){
        message.reply("Yahallo!")
    }
    if (message.content == "hello Haruko"){
        message.reply("Legendary Bot is on duty!")
    }
    if (message.content == "mata") {
        message.reply("Mata ne")
    }
})

const doorChannelId = "924152635479699457"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(doorChannelId).send({
      content: `<@${member.id}> Welcome to the server!`,
      files: [img]
    })
})

client.login(process.env.TOKEN)