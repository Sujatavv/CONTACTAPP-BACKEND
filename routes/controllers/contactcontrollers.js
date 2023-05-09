const asyncHandler =require("express-async-handler");
const Contact =require("./models/contactModel");




//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts =asyncHandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createcontact =asyncHandler(async(req,res)=>{
    console.log("The request body is:", req.body);
    const {name,email,phone} =req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new error("All fileds are Mandotory!")
    }
    const contact =await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact)
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