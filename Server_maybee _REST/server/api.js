const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){    
    // res.json({ username: 'Flavio' })
    res.end(JSON.stringify(
        {a: 1,
         b: 2,
         c: 3}
        ))
})

module.exports = router;