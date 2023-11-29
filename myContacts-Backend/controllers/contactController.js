const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res)=> {
    res.status(200).json({ message : "Get All contacts"});
});

//@desc create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=> {
    console.log("request body is : " , req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    } 
    res.status(200).json({ message : "Create Contact" });
});

//@desc get contact by ID
//@route get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `contact retrieved for ${req.params.id}` })
});

//@desc update contact
//@router put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `contact updated for ${req.params.id}` })
});

//@desc delete contact
//@router delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message : `contact deleted for ${req.params.id}` });
});

module.exports = { getContacts , createContact, getContact, updateContact, deleteContact };

