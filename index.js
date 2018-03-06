var express = require('express');
var path = require('path');
var app = express()

var PORT = process.env.PORT || 8081

app.use(express.static(__dirname + '/'))

// Required for server to resolve routes other than /
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, function() {
	console.log('Server listening on port ', PORT)
})
