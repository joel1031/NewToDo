require("dotenv").config();
//import express library
const express = require('express');

//import connectToMongoDB function from database.js
const {connectToMongoDB} = require('./database');

//import routes from routes.js
const router = require('./routes');

//create an express app
const app = express();

//use /api to prefix all routes
app.use("/api", router);

//make a port for the server to listen on
const port = process.env.PORT || 5000;

const startServer = async() => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
startServer();