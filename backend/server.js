//Import express
const express = require('express');
//Create an instance of express called 'app'
const app = express();
const PORT = process.env.PORT || 5000;
const { connect } = require('./database');

//Connect to the database
connect();


const router = require('./routes');
app.use('/api', router);

//Create a port variable
const port = 5000;

//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});