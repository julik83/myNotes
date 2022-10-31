//to have:
//DB
//Node
//Editor
//Comandline or Terminal

//npm init -y  (fills the JSON)
//npm install express --save
//npm install nodemon --save-dev
//npm install body parser --save
//npm install mongose --save

//set up of server and its midlware
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//cors is not from net ninja, this was added in order to use the mini frontend which I created. cors has to be applied since the frontend is using two servers https://stackoverflow.com/questions/46522749/how-to-solve-redirect-has-been-blocked-by-cors-policy-no-access-control-allow 
let cors = require("cors");
app.use(cors());

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

