const Contacts = require("../models/contactModel")

const asyncHandler = require("express-async-handler")

//@Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler(async (req,res)=>{
    const contact = await Contacts.find()
    res.status(200).json(contact)
})


//@Get contacts by id 
//@route POST /api/contacts/:id
//@access public 
const getContactbyId =asyncHandler(async (req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    
    res.status(200).json(contact)    //201 resource created
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
    const contact = await Contacts.create(
        {
         name,
         email,
         phone_no  
        }
    )
    res.status(201).json(contact)    //201 resource created
})


//@update contacts
//@route PUT /api/contacts/:id
//@access public 
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    const updatedContact = await Contacts.findByIdAndUpdate( 
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})


//@delete contacts
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contacts.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    const deletedContact = await Contacts.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedContact)
})

module.exports = {getContacts,getContactbyId,createContact,updateContact,deleteContact}