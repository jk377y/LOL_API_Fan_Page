const path = require('path');// Import the path package
const express = require('express');// Import the express package
const session = require('express-session');// Import the express-session package
const exphbs = require('express-handlebars');// Import the express-handlebars package
const SequelizeStore = require('connect-session-sequelize')(session.Store);// Import the connect-session-sequelize package and use the Store() method to create a new SequelizeStore object
const routes = require('./controllers');// Import the routes from the controllers folder
const sequelize = require('./config/connection');// Import the sequelize connection from the config folder
const helpers = require('./utils/helpers');// Import the helpers from the utils folder
const app = express();// Create a new instance of the express server
const PORT = process.env.PORT || 3001;// Set the port to be used by the server (3001 if no port is specified in the .env file)
const hbs = exphbs.create({ helpers });// Create a new instance of the express-handlebars object and pass in the helpers object
const sess = {
	// Create a new session object to be used by express-session
	secret: 'Super secret secret', // The secret is used to sign the session ID cookie. This can be anything you want
	resave: false, // The resave property forces the session to be saved back to the session store, even if the session was never modified during the request
	saveUninitialized: true, // The saveUninitialized property forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified
	store: new SequelizeStore({
		// The store property tells express-session to use the SequelizeStore object we created earlier
		db: sequelize, // The db property tells SequelizeStore to use the sequelize connection we created earlier
	}),
}
app.use(routes); // Use the routes we imported earlier with the express server
app.use(session(sess)); // Use the session object we created earlier with express-session
app.engine('handlebars', hbs.engine); // Use the express-handlebars object we created earlier with the express server
app.set('view engine', 'handlebars'); // Set the view engine to be used by the server to handlebars
app.use(express.json()); // Use the express.json() method to parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Use the express.urlencoded() method to parse incoming URL-encoded data
app.use(express.static(path.join(__dirname, 'public'))); // Use the express.static() method to serve static files such as images, CSS files, and JavaScript files





sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
});

