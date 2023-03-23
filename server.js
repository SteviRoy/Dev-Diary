// Import required packages
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import the database connection
const sequelize = require('./config/connection');

// Set up the Express.js app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up the session configuration
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Apply the session middleware
app.use(session(sess));

// Set up Handlebars.js as the templating engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up the built-in middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the static directory for serving static assets
app.use(express.static('public'));

// Apply the routes
app.use(routes);

// Start the server and synchronize the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
