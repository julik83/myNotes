//setup of routes
//whatchout request parameters and url parameters difference

//na post request mozme pouzit jQuery
// $.ajax({
//     method:"POST",
//     url:"http://something/api/endpoint",
//     data:{name:'Name', rank:'Rank'}
// })

const express = require ('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjasnear', function(req, res, next){
   
    
    //https://stackoverflow.com/questions/48098106/mongoose-mongodb-getting-error-geonear-is-not-a-function
    Ninja.aggregate([{
        $geoNear: {
            near: {
                type:'Point',
                coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
            },
            distanceField: 'distance',
            maxDistance: 150000,
            spherical: true
        }
    }]).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});

router.get('/ninjas', function(req, res, next){
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
    //https://stackoverflow.com/questions/48098106/mongoose-mongodb-getting-error-geonear-is-not-a-function
});


// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;

