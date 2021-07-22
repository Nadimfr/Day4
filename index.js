var express = require("express");  // Importing the express js module

var app = express();  // Initializing app using express

app.get('/', (req, res)=> {
    res.send("Hello World");
});

app.listen(4000);