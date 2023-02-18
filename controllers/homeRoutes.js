const router = require('express').Router();// Import the express package and use the Router() method to create a new router object

// GET HOMEPAGE

router.get ('/', async (req, res) => {
    try {
        res.render('homepage', { // Use the render() method to render the homepage handlebar

        });
    } catch (e) {
        console.log(e); // If there is an error, log it to the console
        res.status(500).json(e); // If there is an error, return a status code of 500 and the error message in JSON
    }
});


// !GET LOGIN -- {{work in progress}}
router.get('/login', (req, res) => {// Use the get() method to create a GET route for the login page (localhost:3001/login)
	// if (req.session.loggedIn) {// If the user is logged in, redirect them to the homepage
	// 	res.redirect('/');// Use the redirect() method to redirect the user to the homepage
	// 	return;
	// }
	res.render('login');// Use the render() method to render the login handlebar
});






module.exports = router;

