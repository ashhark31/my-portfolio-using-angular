const welcomeData = [
    {
        _id: new ObjectId(),
        welcomeTitle: "Hello world !!!",
        welcomeMessage: "welcome to my portfolio. this is done in Angular.js. I wanted to learn angular.js and I like project based learning, so, I maked it. And I will try to make this portfolio in React.js and Django also and then encapsulate these into one project.",

    },
    {
        _id: new ObjectId(),
        frontEnd: ["HTML", "CSS", "Angular.JS"],
        database: ["MongoDB"],
        backEnd: ["Node.JS", "Express.JS", "CORS"],
    },
    {
        _id: new ObjectId(),
        tools: "Postman, Robo-3T, Node.JS",
    }
]

conn.collection("welcomePage").insertMany(welcomeData);