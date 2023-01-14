
const mongoose = require("mongoose")
require("../mongodb")
const conn = mongoose.connection

const experienceData = [
    {
        _id: new ObjectId(),
        experience: ["Persistent Systems", "Software Engineer", "Pune, India", "Jan 2022 - Nov 2022", "Intern (trainee) + FTE", "6 mos + 3 mos (9 months exp.)"]
    },
    {
        _id: new ObjectId(),
        training_key: ["Technology Track", "Training On"]
    },
    {
        _id: new ObjectId(),
        training_value: ["Java Full Stack", "Git, SQL(Oracle), OOPS, Java, Maven, Spring, HTML, CSS, JavaScript, React.js"]
    }
]

conn.collection("experiencePage").insertMany(experienceData);