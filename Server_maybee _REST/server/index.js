const express = require('express');
let cors = require("cors");
const app = express();
app.use(cors());
//commented lines in case of use api.js router
//app.use('/api', require('./api'));

app.get('/', function(req, res, next){    
    //res.json({ username: 'Flavio' })
    res.end(JSON.stringify(
        {a: 1,
         b: 2,
         c: 3}
        ))
})

app.listen(process.env.port||3000, function(){
    console.log('I am listening');
})

