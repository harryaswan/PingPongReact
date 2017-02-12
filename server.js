const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000));

app.use('/public', express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
