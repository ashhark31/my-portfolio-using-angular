const client = require('../mongodb')
const databaseName = 'portfolio'
const db = client.db(databaseName)

db.collection('achievementsPage').insertOne({
    achievements: ['LeetCode' ,'2 star coder in problem solving', 
    'https://leetcode.com/ashhark31', '', 'HackerRank | 4 star coder in problem solving', 'https://www.hackerrank.com/ashhark31'],
});


// const { ObjectId } = require('mongodb');
// const mongoose = require('mongoose')
// require("../mongodb")
// const conn = mongoose.connection

// const achievementsData = {
//     _id: new ObjectId(),
//     achievements: ['LeetCode' ,'2 star coder in problem solving', 
//     'https://leetcode.com/ashhark31', '', 'HackerRank | 4 star coder in problem solving', 'https://www.hackerrank.com/ashhark31']
// }

// conn.collection("achievementsPage").insertOne(achievementsData);