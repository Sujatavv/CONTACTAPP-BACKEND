// const dotenv =require("dotenv").config();

// require("dotenv").config();

const process=require('process');

const express=require( "express");

// const dotenv =require("dotenv").config();
const { constants } =require("./constants.js");

const errorHandler =require("./routes/controllers/middleware/Errorhandler.js");
const ConnectDb =require( './routes/Config/dbConection.js');

ConnectDb()
const app =express();


const port = process.env.PORT || 8001;
app.use(express.json());

app.get("/api/contacts",(req ,res)=>{
res.status(200).json({messege:"Get all contacts"});
 });

// app.use(json());

app.use("/api/contacts",require("./routes/contactsRouts.js"));
app.use(errorHandler);
// app.use(json());

app.listen(port,()=> {
    console.log(`Server running on  port ${port}`);
});
