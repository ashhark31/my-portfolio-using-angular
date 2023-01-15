const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = process.env.DATABASE

const client = new MongoClient(connectionURL, {
    useUnifiedTopology: true,
});

client.connect((error) => {
    console.log("connected successfully");
});

module.exports = client;


//--------- for Cloud / Mongo Atlas (using mongoose)
// const dotenv = require("dotenv")
// const mongoose = require("mongoose")

// dotenv.config({path:`${__dirname}/../config.env`});
// const databaseName = process.env.DATABASE;

// mongoose.connect(databaseName, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false
// }).then(() => {
//     console.log("connection successful");
// }).catch((err) => {
//     console.log(err);
// })