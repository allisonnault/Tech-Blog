
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js which template engine we're using
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
  });