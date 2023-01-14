const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
require("../mongodb")
const conn = mongoose.connection

const aboutData = {
    _id: new ObjectId(),

    myName: "Mohammad Ashhar Khan",

    aboutMe: "I am a programmer and developer. I am from Jabalpur, Madhya Pradesh, India. I have completed my B.tech from Shri Ram Institute of Technology, Jabalpur(M.P.). I have also completed my higher and secondary education from Maharashtra Higher Secondary School, Jabalpur(M.P.). I can work on C/C++, Java, Javascript, Python. If you want to see my skills in details then kindly visit my skills section. I have worked on various projects like - Expenses list, chat app and many more which is listed in projects section. And last, I have some achievements on problem solving - 4 star on HackerRank and 2 star on LeetCode.",

    myCareer: "I am a Ex-Persistent Systems. My designation was Software Engineer. I worked here as a Intern and FTE. I Joined this organisation mid of Jan,2022 and my resignation was Nov,2022. I learned a lot in this organisation. Persistent Systems is the best place if someone want to enhance and work in his skillset."
}

conn.collection("aboutPage").insertOne(aboutData);