const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Default page for example app')
})

app.get('/health', function (req, res) {
  res.send('Default healthcheck page for example app')
})

// finally, let's start our server...
var server = app.listen( 2999, function(){
  console.log('Listening on port ' + server.address().port);
});
