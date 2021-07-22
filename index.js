var express = require("express");  // Importing the express js module

var app = express();  // Initializing app using express

app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Hello World");
});

const users = [{ name: 'Nadim' , password: '1234' }, 
               { name: 'Charles' , password: '0000' }
];

app.get('/getUser', (req,res) => {
    res.json(users)
});

app.post('/users' , (req,res) => {

    const user = { name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send('User created')
});

app.post('/users/login' , async (req,res) => {

    const user = users.find(user => user.name = req.body.name)

    if (user == null) {
        return res.status(400).send('User not found')
    } else
    return res.status(200).send('User found : ' +res.body.name)
});

app.listen(4000);

