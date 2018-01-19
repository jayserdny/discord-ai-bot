# Artificial Intelligence Discord Bot

This bot is capable of answer any message sent through discord using the '!' command to specify that this message is for the bot. This bot works using the [Api.ai](https://dialogflow.com/) which is now known as DialogFlow.

The responses can be trained to any situation such as book a flight, query the weather and so many things. In addition, you can add custom responses for very special cases that you want to respond with a specific answer.

### Stack

This bot is running using NodeJs with the apiai & discord.js modules. Simple as this.

### How to run

In order to run the bot, you should get an API key from [DialogFlow](https://dialogflow.com/), a discord bot token, and of course, a discord bot configurated.

To run, you need to excecute the following command:

```sh
AUTH_TOKEN=<your-discord-token> API_AI=<your-api-ai-key> node main.js
```

### Contributos

To contribute to this project, fork this repo and make a pull request with your changes.