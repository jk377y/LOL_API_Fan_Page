const router = require('express').Router(); // Import the express package and use the Router() method to create a new router object
const User = require('../../models/User'); // Import the User model from the User.js file in the models folder



router.get('/', async (req, res) => {
    try {
        res.render('login', {

        })
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});





// CREATE new user
router.post('/', async (req, res) => {// post() method to create a new user when the user visits the /api/users endpoint
    try {
        const dbUserData = await User.create({ // create() method to create a new user in the database using the data from the request body
            username: req.body.username, // req.body.username is the username from the request body
            email: req.body.email, // req.body.email is the email from the request body
            password: req.body.password, // req.body.password is the password from the request body
        });
        req.session.save(() => { // req.session.save() method to save the session data to the database
            req.session.loggedIn = true; // req.session.loggedIn is set to true to indicate that the user is logged in
            res.status(200).json(dbUserData) // res.status(200).json(dbUserData) is sent back to the client
        });
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

// LOGIN user
router.post('/login', async (req, res) => { // post() method to login a user when the user visits the localhost:3001/users/login endpoint
    try {
        const dbUserData = await User.findOne({ // findOne() method to find a user in the database using the email from the request body
            where: {
                email: req.body.email // req.body.email is the email from the request body
            },
        });
        if(!dbUserData) { // If no user is found, an error message is sent back to the client
            res.status(400).json({ message: "You have entered an invalid email or password" });
            return;
        }
        const validPassword = await dbUserData.checkPassword(req.body.password); // dbUserData.checkPassword() from the User model is used to check the password from the request body against the hashed password in the database
        if(!validPassword) { // If the password is incorrect, an error message is sent back to the client
            res.status(400).json({ 
                message: 'You have entered an invalid email or password'
            });
            return;
        }
        req.session.save(() => { // req.session.save() method to save the session data to the database when the loin is successful
            req.session.loggedIn = true; // req.session.loggedIn is set to true to indicate that the user is logged in
            res.status(200).json({ 
                user: dbUserData,
                message: 'You are now logged in!'
            });
        });
    } catch (e) {
        console.log(e);// Log the error to the console
        res.status(500).json(e); // Send the error to the client as a JSON object with a status code of 500
    }

});


// LOGOUT user
router.post('/logout', async (req, res) => { // logout() method to log out a user when the user visits the /api/users/logout endpoint
    if (req.session.loggedIn) { // If the user is logged in,
        req.session.destroy(() => { // req.session.destroy() method to destroy the session data
            res.status(204).end(); // res.status(204).end() is sent back to the client to indicate that the session has been destroyed
        });
    } else {
        res.status(404).end(); // If the user is not logged in, res.status(404).end() is sent back to the client to indicate that the session was not found
    }
});

module.exports = router;// Export the router object to be used in the server.js file