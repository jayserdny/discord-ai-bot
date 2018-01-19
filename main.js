//var apiaiApp = require('apiai')(process.env.API_AI_API);

const Discord = require("discord.js");

// Initialize Discord Bot
const client = new Discord.Client();

// Id of the bot
const botId = '400608746507862017';

// Listen to the ready event of the bot
client.on('ready', function (evt) {
    console.log(evt, 'Connected');
});

client.on('message', message => {

    if (message.author.bot) return;
    
    // Check if the message starts with the !
    if (message.content.indexOf('!') === 0) {
        // get the message excluding !
        var text = message.content.substring(1);
        
        message.reply(text);
    }
});


client.login(process.env.AUTH_TOKEN);