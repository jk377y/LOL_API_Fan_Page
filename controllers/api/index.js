const router = require('express').Router(); // Import the express package and use the Router() method to create a new router object
const championRoutes = require('./championRoutes');
// const userRoutes = require('./userRoutes');

router.use('/champions', championRoutes); //  /api/champions
// router.use('/users', userRoutes); //  /api/users







//! {{wasnt working here. works on index.js controllers}} const championRoutes = require('./championRoutes'); // Import the champion routes from the champion-routes.js file
// const userRoutes = require('./userRoutes'); // Import the user routes from the user-routes.js file



// router.use('/users', userRoutes);// Use the user routes when the user visits the /users endpoint (localhost:3001/users
//! {{wasnt working here. works on index.js controllers}} router.use('/champions', championRoutes);// Use the champion routes when the user visits the /champions endpoint (localhost:3001/champions)









module.exports = router;// Export the router object to be used in the server.js file






















module.exports = router;// Export the router object to be used in the server.js file