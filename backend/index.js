const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
const server = http.createServer(app);

const agentProfile = require('./agent-profile');
const startAgent = require('./agent');
startAgent(process.env.SOCKET_PORT || 8080);

app.use(cors());
app.set('port', process.env.PORT || 4000);
const port = app.get('port');

app.get('/', (req, res) => {
  res.json(agentProfile);
});

server.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});
