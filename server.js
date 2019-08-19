require('http').createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world in shortend way');
}).listen(4002);
