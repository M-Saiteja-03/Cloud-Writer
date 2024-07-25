const express = require('express');
const User = require('../models/User');
const router =express.Router();
// const User = require('../models/User')

router.post('/',(req,res)=>{
    console.log(req.body);
    const iuser= User(req.body);
    iuser.save();
    res.send(req.body);
})

module.exports = router;