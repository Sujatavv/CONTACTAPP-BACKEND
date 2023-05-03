const asyncHandler =require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts =asyncHandler(async(req,res)=>{
    res.status(200).json({messege:"Get all contacts"});

});
//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createcontact =asyncHandler(async(req,res)=>{
    console.log("The request body is:", req.body);
    const {name,phone,email}= req.body;
    if(!name|| !phone|| !email){
        res.status(400);
        throw new error("All fileds are Mandotory!")
    }
    res.status(201).json({messege:"Create NEW contacts"});

});
//@desc Update new contacts
//@route PUT /api/contacts:id
//@access public
const getContact =asyncHandler(async(req,res)=>{
    res.status(200).json({messege:`Get contacts for ${req.params.id}`});

 });

//@desc Create new contacts
//@route UPDATE /api/contacts/id
//@access public
const updatecontact=asyncHandler(async(req,res)=>{
    res.status(200).json({messege:`Update contacts for ${req.params.id}`});

});

//@desc DELETE contacts
//@route DELETE /api/contacts/id
//@access public

const deleteContact =asyncHandler(async(req,res)=>{
    res.status(200).json({messege:`Delete contacts for ${req.params.id}`});

});



module.exports={ getContacts ,
                createcontact,
                getContact,
                updatecontact,
                deleteContact }