const asyncHandler = require("express-async-handler")

//@Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "get all compound data "})
})


//@Get contacts by id 
//@route POST /api/contacts/:id
//@access public 
const getContactbyId =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`get contact of ${req.params.id}`})    //201 resource created
})


//@cretae contacts
//@route POST /api/contacts
//@access public 
const createContact = asyncHandler(async (req,res)=>{
    console.log("The request body : ",req.body);
    const {name,email,phone_no} = req.body
    if(!name || !email || !phone_no){
        res.status(400)
        throw new Error("All fields are mandatory");
    }
     
    res.status(201).json({message:"create contact"})    //201 resource created
})


//@update contacts
//@route PUT /api/contacts/:id
//@access public 
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contact ${req.params.id}`})
})


//@delete contacts
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:`delete contact by id ${req.params.id}`
    })
})

module.exports = {getContacts,getContactbyId,createContact,updateContact,deleteContact}