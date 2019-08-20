var util = require('util');

require('http').createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello world in shortend way');
  // res.end(req.url);
  res.end(util.inspect(req.headers));
}).listen(4002);
