var path = require('path');
var fs = require('fs');

require('http').createServer(function(req, res) {
  var file = path.normalize('.' + req.url);
  console.log('Trying to serve ', file);

  function reportError(err) {
    console.log(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }

  fs.access(file, fs.F_OK, function(err) {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    fs.stat(file, function(err, stat) {
      var rs;

      if (err) {
        return reportError(err);
      }

      if (stat.isDirectory()) {
        res.writeHead(403);
        res.end('Forbidden');
      }
      else {
        rs = fs.createReadStream(file);

        rs.on('error', reportError);

        res.writeHead(200);

        rs.pipe(res);
      }
    });
  });
}).listen(4002);