
const express = require('express');
const { engine } = require('express-handlebars');
const controller = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3001;


// Inform Express.js which template engine we're using
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(controller);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
  });