const mongoose = require("mongoose")
require("../mongodb")
const conn = mongoose.connection

const skillsData = [
    {
        _id: new ObjectId(),
        skills_key: ["Programming Language", "Web Technologies", "Relevant Coursework", "Databases"]
    },
    {
        _id: new ObjectId(),
        skills_value: ["C/C++, Java, Python", "HTML, CSS, JavaScript", "Data Structures and DBMS", "MySQL, Oracle"]
    }
]

conn.collection("skillsPage").insertMany(skillsData);