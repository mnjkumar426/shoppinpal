const db=require("./src/config/db.config");
const config=require("./src/config/app.config");
const express =require("express");
const app=express();
const bookRoute = require('./src/routes/book.route');
app.use(express.json())




db.dbInit((err,result)=>{
   if(result){
    initApp();  
   }
   else{
       console.log(err)
   }
   

})
const initApp=()=>{
 //Route   
app.use('/book', bookRoute);


app.use( (err, req, res, next)=> {
    let code=err.code || 500;
    res.status(code).json({status:false,message:err.message})
  })
//Server
    app.listen(config.port, function () {
        console.log(`App start listening on prot ${config.port}`);
      });

}

