const express = require('express');

const app = express();

// Router
app.use('/', require('./routes/index'));
app.get('/details', (req, res)=>res.send("Year: 2020"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}.`));