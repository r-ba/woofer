const http = require('http');
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const server = http.createServer(app);

const agentProfile = require('./agent-profile');
const startAgent = require('./agent');
startAgent(process.env.SOCKET_PORT || 8080);

app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 4000);
const port = app.get('port');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/agent', (req, res) => {
  res.json(agentProfile);
});

server.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});
