const router = require('express').Router(); // Import the express package and use the Router() method to create a new router object
const homeRoutes = require('./homeRoutes.js'); // Import the home routes from the home-routes.js file
const apiRoutes = require('./api'); // Import the api routes from the api/index.js file
// const championRoutes = require('../controllers/api/championRoutes'); // Import the champion routes from the champion-routes.js file
// const userRoutes = require('../controllers/api/userRoutes'); // Import the user routes from the user-routes.js file



router.use('/', homeRoutes);// Use the home routes when the user visits the homepage (localhost:3001/)
router.use('/api', apiRoutes);
// router.use('/champions', championRoutes);// Use the champion routes when the user visits the /champions endpoint (localhost:3001/champions)
// router.use('/users', userRoutes); // Use the user routes when the user visits the /users endpoint (localhost:3001/users)

















module.exports = router;