var server = require('pushstate-server');

var CURRENT_PORT = process.env.PORT || 3000;

console.log('Starting server on port: ' + CURRENT_PORT);
server.start({
  port: CURRENT_PORT,
  directory: './build'
});

