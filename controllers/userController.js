const asyncHandler = require("express-async-handler")
const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//@Get all contacts
//@route GET /api/contacts
//@access public 
const resgisterUser = asyncHandler(async (req,res )=>{
    const {username, email, password} = req.body
    if (!username || !email || !password) {
        console.log("1");
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({email})
    if (userAvailable) {
        console.log("2");
        res.status(400)
        throw new Error("User already exist")
    }
    console.log("3");

    //so here we will be using the bcrypt in order to create the hash of password i.e encryption 
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword); 
    const registerUser = await User.create({
        username,
        email,
        password:hashedPassword
    })
    if (registerUser) {
        res.status(201).json({_id: registerUser.id , email : registerUser.email})
    }
    else{
        res.status(400)
        throw new Error("User data is not valid")
    }
   
})

const loginUser = asyncHandler(async (req,res )=>{
    const {email, password} = req.body
    if (!email || !password ) {
        res.status(400)
        throw new Error("All fiels are mandatory")
    }
    const user = await User.findOne({email})  //storing the whole object in user
    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = await jwt.sign({
        user:{
            username : user.username,
            email : user.email,
            id : user.id
        }
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"60m"}
    )
     res.status(200).json({accessToken})  
    }
    else{
        res.status(401)
        throw new Error("Email or Password is not valid")
    }
  
})

const currentUser = asyncHandler(async (req,res )=>{
    res.json(req.data)     // thid res.data is what we have defined in validationTokenHandler.js 
})



module.exports ={resgisterUser,loginUser,currentUser}