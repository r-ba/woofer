import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

const fetchAgentInfo = async () => {
  const url = 'http://localhost:4000';
  try {
    return fetch(url).then(results => {
      return results.json();
    });
  } catch (err) {
    return {};
  };
}

const statusListener = callback => {
  socket.on('agent-status', status => {
    callback(status);
  });
}

const messageEmitter = message => {
  socket.emit('consumer-message', message);
}

const messageListener = callback => {
  socket.on('agent-message', message => {
    callback({
      sender: 'agent',
      text: message
    })
  });
}

const destroyListeners = () => {
  socket.off('agent-status');
  socket.off('agent-message');
}

export {
  fetchAgentInfo,
  statusListener,
  messageEmitter,
  messageListener,
  destroyListeners
};
