const dotenv = require("dotenv")
dotenv.config({path:`${__dirname}/../config.env`});

const express = require('express');
const bodyParser = require('body-parser')
const corse = require('cors');
const path = require('path');

const app = express();
port = process.env.PORT;

const client = require("./mongodb")
const conn = client.db("portfolio")

//------ for mongoAtlas (cloud) ------
// const mongoose = require("mongoose")
// require("./mongodb")
// const conn = mongoose.connection

app.use(bodyParser.json())
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const angularDistPath = path.join(__dirname, '../my-portfolio/dist/my-portfolio/');
app.use(express.static(angularDistPath));

app.get("*", function(req,res) {
    res.sendFile(
        path.join(__dirname, "../my-portfolio/dist/my-portfolio/index.html")
    );
})

app.post('/welcomePage', (req,res) => {
    conn.collection('welcomePage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/aboutPage', (req,res) => {
    conn.collection('aboutPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/educationPage', (req,res) => {
    conn.collection('educationPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/experiencePage', (req,res) => {
    conn.collection('experiencePage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/skillsPage', (req,res) => {
    conn.collection('skillsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/projectsPage', (req,res) => {
    conn.collection('projectsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/projectsPage', (req,res) => {
    conn.collection('projectsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/achievementsPage', (req,res) => {
    conn.collection('achievementsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/contactPage', (req,res) => {
    conn.collection('contactPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.listen(port, () => {
    console.log(`server listening on the port: ${port}`);
})
