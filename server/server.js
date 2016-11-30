var express = require('express');
var app = express();

//oh hi db
var db = require('./db');

//routes and middleware
require('./config/middleware.js')(app, express);
// require()(app, express);

app.listen(3000);