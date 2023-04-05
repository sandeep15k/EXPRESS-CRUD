const asyncHandler = require("express-async-handler")
const User = require("../models/userSchema")

//@Get all contacts
//@route GET /api/contacts
//@access public 
const resgisterUser = asyncHandler(async (req,res )=>{
    const {username, email, password} = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = User.findOne({email})
    if (userAvailable) {
        res.status(400)
        throw new Error("User already exist")
    }
    const registerUser = await User.create({
        username,
        email,
        password
    })
    res.json(registerUser)
})

const loginUser = asyncHandler(async (req,res )=>{
    const {username, password} = req.body
    if (!username || !password ) {
        res.status(400)
        throw new Error("All fiels are mandatory")
    }
    
    res.json({message: "Login user"})
})

const currentUser = asyncHandler(async (req,res )=>{
    res.json({message: "Current user"})
})



module.exports ={resgisterUser,loginUser,currentUser}