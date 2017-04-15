var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../public')));

var port = 3000;
app.listen(port, _ => {
  console.log('listening on port', port);
});
