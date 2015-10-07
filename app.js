var express = require("express");  
var geoip = require('geoip-lite');
var http = require('http');
var countries = require('country-data').countries;
var app = express();

var tokensApi = require('./app/tokensApi');
app.get('/tokens', tokensApi.findAll);
app.get('/tokens/:id', tokensApi.findById);
app.post('/tokens', tokensApi.create);
app.delete('/tokens/:id', tokensApi.deleteById);
app.put('/tokens/:id', tokensApi.update);

var port = (process.argv.length > 2) ? parseInt(process.argv[2],10) : 9765
app.listen(port, function() {                       
    console.log("Hello service started on port "+port);
});
