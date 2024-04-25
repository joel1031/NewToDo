//Import express
const express = require('express');

//Create an instance of express called 'app'
const app = express();

//create a test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Create a port variable
const port = 3000;

//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});