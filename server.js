
// const dotenv =require("dotenv").config();

const process=require('process');
const dotenv =require("dotenv").config();
const express=require("express");



const {Constants }= require("./constants.js");
// const {Constants } =require("./constants");

const errorHandler =require("./routes/controllers/middleware/Errorhandler.js");
const ConnectDb =require( './routes/Config/dbConection.js');
const {getContacts} = require('./routes/controllers/contactcontrollers.js');

ConnectDb();

const app =express();



const port = process.env.PORT || 8001;
// app.use(json());

app.get("/api/contacts",(req,res)=>{
// res.status(200).json([]);
res.status(200).json({messege:"Get all contacts"})
 });
// app.use(json());

app.use("/api/contacts",require("./routes/contactsRouts.js"));
app.use(errorHandler);
// app.use(json());

app.listen(port,()=> {
    console.log(`Server running on  port ${port}`);
    
});



