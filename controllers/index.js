const router = require('express').Router(); // Import the express package and use the Router() method to create a new router object

const homeRoutes = require('./homeRoutes.js'); // Import the home routes from the home-routes.js file
const apiRoutes = require('./api'); // Import the api routes from the api/index.js file

router.use('/', homeRoutes);// Use the home routes when the user visits the homepage (localhost:3001/)
router.use('/api', apiRoutes);// Use the api routes when the user visits the api homepage (localhost:3001/api)

module.exports = router;