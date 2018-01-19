var apiaiApp = require('apiai')(process.env.API_AI);

const Discord = require("discord.js");

// Initialize Discord Bot
const client = new Discord.Client();

// Id of the bot
const botId = '<Replace-with-your-bot-id>';

// Listen to the ready event of the bot
client.on('ready', function (evt) {
    console.log(evt, 'Connected');
});

// Check for incomming messages into the channel
client.on('message', message => {

    // Avoid the bot to reply to itself
    if (message.author.bot) return;
    
    // Check if the message starts with the !
    if (message.content.indexOf('!') === 0) {
        // Get a substring to exclude the ! from the message
        var text = message.content.substring(1);
        
        // Parse the text to the API.ai
        var request = apiaiApp.textRequest(text, {
            sessionId: '<any-unique-name>'
        });

        // Listen to a response from API.ai
        request.on('response', (response) => {
            // Reply the user with the given response
            message.reply(response.result.fulfillment.speech);
        });
    
        // Listen for any errors in the response
        request.on('error', (error) => {
            // Tell the user that an error happened
            message.reply("Oops! There is an error in our end")
        });

        // End the request to avoid wasting memory
        request.end();
    }
});

// Login into the Discord API
client.login(process.env.AUTH_TOKEN);