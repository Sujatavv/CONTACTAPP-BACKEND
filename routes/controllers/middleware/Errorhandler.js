const errorHandler =(err,req,res,next) =>{
    const statusCode= res.statusCode ? res.statusCode:500;
    res.json({messege:err.messege,stackTrace:err.stack});
    // res.json({title:"NOT FOUND",messege:err.messege ,stackTrace:err.stack}); 
    // res.json({title:"VALIDATION  FAILED",messege:err.messege ,stackTrace:err.stack});
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"VALIDATION FAILED",
                messege:err.messege ,
                stackTrace:err.stack
            });
        case constants.UNOTHRISED:
            res.json({
                title:"UNOTHORISED",
                messege:err.messege ,
                stackTrace:err.stack
            }); 
            case constants.FORBIDDEN:
                res.json({
                    title:"FORBIDDEN",
                    messege:err.messege ,
                    stackTrace:err.stack
                }); 
                case constants.NOT_FOUND:
                res.json({
                    title:"NOT FOUND",
                    messege:err.messege ,
                    stackTrace:err.stack
                }); 
                case constants.SERVER_ERROR:
                res.json({
                    title:"SERVER ERROR",
                    messege:err.messege ,
                    stackTrace:err.stack
                }); 
                
    
            



        
            break;
            default:
                console.log("NO  ERROR! ALL GOOD")
            break;

        

        
    }


};
module.exports =errorHandler;
