const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router =express.Router();
const bcrypt = require('bcryptjs'); 
var jwt = require('jsonwebtoken');

const JWT_SECRET= 'Learning Full Stack Web Dev'

router.post('/createuser',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid pass').isLength({min:5}),

],async (req,res)=>{
    try {
    // console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    let user = await User.findOne({email:req.body.email})
    if(user){
        res.status(400).json({"error":"user already exists"});
    }

    //adding salt to password for security using bcrypt.js
    const salt= await bcrypt.genSalt(10);
    const securepass=  await bcrypt.hash(req.body.password,salt);

    //creating user in database 
    user = await User.create({
        name : req.body.name,
        password : securepass,
        email : req.body.email
    })

    const data = {
        user:{
            id : user.id
        }
    }
    const authtoken= jwt.sign(data, JWT_SECRET)
    res.send({authtoken});
    // const iuser= User(req.body);
    // iuser.save();
    }catch(error){
        console.error(error.message);
        res.status(500).json({error:error.message})
    }
})

module.exports = router;