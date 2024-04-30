require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI;
const client = new MongoClient(uri);

const connect = async () => {
    try {
        await client.connect();
        console.log("Connected to the database");
    } catch (error) {
        console.error(error);
    }
};

module.exports = { connect };