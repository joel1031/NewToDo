require('dotenv').config();
const mongoose = require('mongoose');

const connect = async() => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to the database");
    } catch(err){
        console.log(err);
        console.log("Failed to connect to the database");
    }
}

module.exports = {mongoose, connect };