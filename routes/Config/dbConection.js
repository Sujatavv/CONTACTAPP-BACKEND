const mongoose =require('mongoose');

const conection_string =require('dotenv');

const ConnectDb =async() =>{
    try{
const connect =await mongoose.connect(process.env.conection_string);
        console.log("Database connected" ,
        connect.connection.host,
        connect.connection.name
        );
}catch(err){
    console.log(err);
    process.exit(1)
};
};



module.exports = ConnectDb;
