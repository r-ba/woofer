const io = require('socket.io')();
const discord = require('discord.js');
const discordClient = new discord.Client();

const startAgent = (port) => {
  discordClient.login(process.env.DISCORD_TOKEN);
  discordClient.on('ready', () => {

    const discordAgentId = process.env.DISCORD_AGENT_ID;
    const discordChannel = process.env.DISCORD_CHANNEL;

    // split discord message content into id and message
    const parseAgentMessage = message => {
      const atPosition = message.indexOf('$');
      const splitMsg = message.slice(atPosition+1).split(' ');
      const id = splitMsg.shift();
      const text = splitMsg.join(' ');
      return { id, text };
    };

    const connectedIds = [];

    const statusMap = {
      'online': 'Online',
      'dnd': 'Away',
      'idle': 'Away',
      'offline': 'Offline'
    };
    discordClient.on('presenceUpdate', (oldUser, newUser) => {
      const status = statusMap[newUser.user.presence.status];
      for (let id of connectedIds) io.to(id).emit('agent-status', status);
    });

    discordClient.on('message', message => {
      // if message is from whitelisted discord member id
      if (discordAgentId === message.author.id) {

        const { id, text } = parseAgentMessage(message.content);

        // if client id exists, send message
        if (connectedIds.indexOf(id) > -1) {
          io.to(id).emit('agent-message', text);
        }
      }
    });

    io.on('connection', client => {
      // keep track of the connected clients id
      connectedIds.push(client.id);

      const agentStatus = statusMap[discordClient.users.get(discordAgentId).presence.status];
      client.emit('agent-status', agentStatus);

      // listen for messages sent from the clientside
      client.on('consumer-message', message => {
        discordClient.channels.get(discordChannel).send("```"+`$${client.id} says:\n\n${message}`+"```");
      });

      // remove client id on disconnect
      client.on('disconnect', () => {
        connectedIds.splice(connectedIds.indexOf(client.id), 1);
      });

    });

    io.listen(port);

  });
};

module.exports = startAgent;
