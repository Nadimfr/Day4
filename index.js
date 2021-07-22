var express = require("express");  // Importing the express js module

var app = express();  // Initializing app using express

app.get('/', (req, res)=> {
    res.send("Hello World");
});

app.get("/getUser", (req,res)=> {

    var userObj = {
        userId: 1,
        username: "Nadim",
        active: true
    }

    res.send(userObj);
});

app.listen(4000);

