const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 4000);
const port = app.get('port');

app.get('/', (req, res) => {
  res.json({});
});

const io = require('socket.io')();

const agentData = {
  icon: 'images/user.png',
  name: 'Username',
  status: 'Offline',
  unseenMessages: 0
};

io.on('connection', client => {
  client.emit('agent-info', agentData);
  client.on('subscribeToChat', (interval) => {
    // ...
  });
});
io.listen(8080);

server.listen(port, function(){
  console.log(`Server started on port ${port}...`)
});
