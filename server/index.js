//import express library
const express = require('express');

//create an express app
const app = express();

//create test route to make sure server is working
app.get("/hello", (req, res) => {
    res.status(200).json({ msg: "Hello" });
});

//make a port for the server to listen on
const port = 5000;

//listen to server on localhost:5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});