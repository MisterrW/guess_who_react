const express = require('express');
const app = express();
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

var port = process.env.PORT || 3000;

app.use(express.static('client/build'));
// app.use(connect.json());

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server running. http://%s:%s', host, port);
});
