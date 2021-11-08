const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    //res.render('index');
    //res.redirect('/signin2'); 
    //console.log("asda");
    //res.send('asd');
    res.render('index', { layout: 'main'});
});

module.exports = router;
