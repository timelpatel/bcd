var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.listen(3030, function () {
  console.log('BCD listening on port 3030')
})
