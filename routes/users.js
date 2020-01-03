const express = require('express');
const router = express.Router();

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res)=>{
    const { name, email , password, password2} = req.body; 
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2) {
        console.log("Please fill in all fields");
        errors.push({msg: "Please fill in all fields"});
    }

    // Check passwords match 
    if(password !== password2) {
        console.log('Passwords do not match.');
        errors.push({ msg: 'Passwords do not match.'});
    }

    // CHeck pass length
    if(password.length < 6) {
        console.log('Password should be at least 6 characters.');
        errors.push({ msg: 'Password should be at least 6 characters.'});
    }

    if(errors.length > 0 ) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        res.send('pass');
    }
});


module.exports = router;