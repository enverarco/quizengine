var express = require('express');
var body = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(5656, () => {
    console.log('http://localhost:5656')
})
