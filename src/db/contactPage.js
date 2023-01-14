
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
require("../mongodb")
const conn = mongoose.connection

const contactData = {
    _id: new ObjectId(),
    address_key: ['Permannent Address', 'Email', 'LinkedIn'],
    address_value: ['Jabalpur, Madhya Pradesh (482002), India', 'ashhark31@gmail.com', 'linkedin.com/in/mak27072000']
}

conn.collection("contactPage").insertOne(contactData);