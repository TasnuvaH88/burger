var express = require("express");
var methodoverride = require("method-override");
var bodyparser = require("body-parser");

var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var db = process.env.DATABASE_URL || 'localhost';
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyparser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodoverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(port);