// npm packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const app = express();

// access to public folder


app.use(express.static('public'));

app.use(bodyParser.urlencoded( { extended: false }));

app.use(methodOverride('_method'));

// set up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// server setup
const router = require('./controllers/burgers_controller.js');
app.use(router);

app.listen(3333, function() {
    console.log("Server is listening on PORT " + 3333 + ".");
});

