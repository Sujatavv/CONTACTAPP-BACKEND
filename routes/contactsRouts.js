const express = require("express");

const routes= express.Router();

// const { getContacts ,
//     createcontact,
//     getContact,
//     updatecontact,
//     deleteContact}

// const getContact=require("../controllers/contactcontrollers");
const {
    getContacts ,
    createcontact,
    getContact,
    updatecontact,
    deleteContact}=require("./controllers/contactcontrollers");
// const createcontact=require("./controllers/contactcontrollers");

// routes.route("/").get((req,res)=>{
    //  res.status(200).json({messege:"Get all contacts"});

//  });
// const getContact= contacts;
routes.route("/").get(getContacts).post(createcontact);
// 
// routes.route("/").post(createcontact);
routes.route("/:id").put(getContact).get(updatecontact).delete(deleteContact);
// routes.route("/:id").get(updatecontact);
// routes.route("/:id").delete(deleteContact);

module .exports= routes;