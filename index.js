const Discord = require("discord.js");
const bot = new Discord.Client


bot.login("token");

const PREFIX = "/";

bot.on('ready', function() {
    console.log("Prêt!");
})

bot.on("ready", () => {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Mon maitre me coder",{type: "WATCHING"})
    bot.user.set
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '/?') {
            message.reply("Délivrez moi, l'esclavagisme est interdit au 21ème siècle... et même au 22e 😥");
            message.react("🆗"); // Oui
            message.react("❔"); // Oui
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue dans notre team!!! Notez que ce bot est entièrement programmé à la main mais il reste expérimental. Bon je te laisse j'ai d'autres ***Occupations*** PS: Lis le #règles. https://giphy.com/gifs/JIX9t2j0ZTN9S");
    }).catch(console.error)
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '/botinfo') {
            let bicon = bot.user.displayAvatarURL;
            let botembed = new Discord.RichEmbed()
            .setDescription("Informations Du Bot")
            .setColor("RANDOM")
            .setThumbnail(bicon)
            .addField("Un bot codé à 100% par FlurtzPung | Crée en", bot.user.createdAt)
            .addField("Nombre de serveurs:", bot.guilds.size)

            return message.channel.send(botembed);
        }
    }
});

bot.on("message", message => {
    if(message.content === "frites") {
        message.channel.send("Sauce?")
    }
    if(message.content === "Frites") {
        message.channel.send("Sauce?")
    }
    if(message.content === "penis") {
        message.delete(message.author)
    }
    if(message.content === "pennis") {
        message.delete(message.author)
    }
    if(message.content === "pénis") {
        message.delete(message.author)
    }
    if(message.content === "Pénis") {
        message.delete(message.author) 
    }
    if(message.content === "Pennis") {
        message.delete(message.author) 
    }
    if(message.content === "Penis") {
        message.delete(message.author) 
    }
});
