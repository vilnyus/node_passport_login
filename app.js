const express = require('express');
const expressLayouts = require('express-layouts');
const app = express();

app.use(express.static(__dirname + '/'));
// app.use(express.static(__dirname + '/public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Router
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}.`));