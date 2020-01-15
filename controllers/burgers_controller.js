// import modules
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// index route
router.get('/', function(req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index', { burger_data });
    });
});



router.post('/burgers/update', function(req, res) {
    // You were using req.body.id; we needed req.body.burger_id!

    burger.update(req.body.burger_id, function(data){
        res.redirect('/')
    });
});

router.post('/burgers/create', function(req, res) {
    burger.create(req.body.burger_name, function(res) {
        console.log(req.body.burger_name);
        // res.redirect('/');
        res.render();
    });
});

// export router
module.exports = router;