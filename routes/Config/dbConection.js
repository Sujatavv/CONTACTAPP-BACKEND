const mongoose =require('mongoose');

const ConnectDb =async() =>{
    try{
    
        const connect =await mongoose.connect("mongodb+srv://sujata22:suji@452@sujata.k4spyoi.mongodb.net/MYCONTACT-PRO?retryWrites=true&w=majority");
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
