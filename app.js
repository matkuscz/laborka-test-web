var express = require('express');
var port = process.env.PORT || 80;
var app = express();

app.use(express.static('public'));

app.listen(3000);
