const mongoose =require("mongoose");
// const { getContacts } = require("../contactcontrollers");

const contactsSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the contact name" ],
    },
    email:{
        type:String,
        required:[true,"Please add the contact email adress" ],
    },
    phone:{
        type:String,
        required:[true,"Please add the contact Phone number" ],


    },

},
{
    timestamps:true,
}
); 
module.exports =mongoose.model("Contact",contactsSchema) 