const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router =express.Router();
const bcrypt = require('bcryptjs'); 
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');

const JWT_SECRET= 'Learning Full Stack Web Dev'

//ROUTE:1 endpoint to create a user-no login required
router.post('/createuser',[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid pass').isLength({min:5}),

],async (req,res)=>{
    try {
    // return error when there is any error
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success:false, errors: errors.array()});
    }

    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({success:false, "error":"user already exists"});
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
    return res.json({success:true, authtoken});
    // const iuser= User(req.body);
    // iuser.save();
    }catch(error){
        console.error(error.message);
        return res.status(500).send("Internal server error")
    }
})

//ROUTE:2 endpoint to login user-no login required
router.post('/login',[
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid pass').exists()

],async (req,res)=>{
    // return error when there is any error
    const errors=validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({success:false,errors: errors.array()});
    }
    try {
        const {email,password} =req.body;
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, error:"Please try to login with correct credentials"})
        }
        const passcomp =await bcrypt.compare(password, user.password);
        if(!passcomp){
            return res.status(400).json({success:false, error:"Please try to login with correct credentials"})
        }
        const data = {
            user:{
                id : user.id
            }
        }
        const authtoken= jwt.sign(data, JWT_SECRET)
        return res.send({success:true, authtoken});

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal server error")
    }

})

//ROUTE:3 get loggedin user details using:"/api/auth/getuser"-login required
router.post('/getuser',fetchuser,async (req,res)=>{
    try {
        userID=req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

});
module.exports = router;
