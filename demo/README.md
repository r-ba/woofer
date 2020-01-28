## Woofer Demo

### Usage

First install the dependencies with `npm install`.

Before you may run the server with `npm start`, you'll need to export the `DISCORD_CHANNEL`, `DISCORD_AGENT_ID`, and `DISCORD_TOKEN` environment variables. The steps required to obtain these are detailed below.

### Discord configuration

In order to use this demo you'll need to have a [discord](https://discordapp.com/) account.

After you've signed up head to your user settings. Under the *Advanced* header of the *Appearance* section, ensure that *Developer Mode* is toggled on.

Next, create a new discord server.

Inside your server record the ID of the text channel within which you wish to be able to send and recieve messages. You can copy the ID by right clicking the text channel and selecting the *Copy ID* option (note that this option is only visible when *Developer Mode* is on). This will be used as the `DISCORD_CHANNEL` environment variable.

You'll also want to record your user ID by right clicking on your user icon and selecting *Copy ID* from the dropdown menu. This will be used as the `DISCORD_AGENT_ID` environment variable.

Now visit the discord developer portal and [create a new application](https://discordapp.com/developers/applications/). Using your *client id* invite your bot into your server by visiting `https://discordapp.com/oauth2/authorize?client_id=YOUR_BOTS_CLIENT_ID&scope=bot`.

Within your application's settings click *Bot* and then select *Add Bot*. Record your bot token somewhere safe. This will be used as the `DISCORD_TOKEN` environment variable.

At this point you're all set to export your environment variables and start up the server.
