const asyncHandler = require("express-async-handler")

//@Get all contacts
//@route GET /api/contacts
//@access public 
const resgisterUser = asyncHandler(async (req,res )=>{
    res.json({message: "Register user"})
})

const loginUser = asyncHandler(async (req,res )=>{
    res.json({message: "Login user"})
})

const currentUser = asyncHandler(async (req,res )=>{
    res.json({message: "Current user"})
})



module.exports ={resgisterUser,loginUser,currentUser}