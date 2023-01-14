
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
require("../mongodb")
const conn = mongoose.connection

const educationData = [
    {
        _id: new ObjectId(),
        college: ['Shri Ram Institute of Technology', 'B.Tech', 'Jabalpur, M.P.', '2018-2022', 'Computer Science and Engineering', '8.32 GPA']
    },
    {
        _id: new ObjectId(),
        school_sec: ['Maharashtra Higher Secondary School', 'HSSC', 'Jabalpur, M.P.', '2017-2018', 'PCM', '62%']
    },
    {
        _id: new ObjectId(),
        school_high: ['Maharashtra Higher Secondary School', 'HSC', 'Jabalpur, M.P.', '2015-2016', 'General', '70.50%']
    }
]

conn.collection("educationPage").insertMany(educationData);