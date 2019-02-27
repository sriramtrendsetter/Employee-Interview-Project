const dbs = require('../models/db');
const encypt=require('./encryption');
exports.register = function(req, res){
    // var input = JSON.parse(JSON.stringify(req.body));

    // console.log(input);
    
    // let name = req.body.userName;
    // let email = req.body.userEmail;
    // let password = req.body.userPassword;
    // let score = 0;
    // let data = [name, email,password,score];
    // let token = req.token;
    // console.log(data,name,email);
    
    // dbs.register(data, (err, result)=>{
    //     if(err) throw err;
    //     console.log(name);
        
    //    res.json({"result":result.rowCount, "token":token,'user': name });
    // })













    var input = JSON.parse(JSON.stringify(req.body));
    /**password encryption */
   var enc =input.userPassword;
   var dbpwd="";   
   let token = req.token;
   encypt.encryptpwd(enc,(data)=>{
         dbpwd+=data
         console.log("in employyeee file"+dbpwd);
         console.log("out"+dbpwd);


         var data = [
             name= input.userName,
             email= input.userEmail,

             password= dbpwd,
             score = 0
            
         ];
     console.log(data)
      
         var y=dbs.register(data,function(err,result){
             if(err) throw err;
             console.log(result);
            //   if(result.rowCount===1){
            // mail.sendmail(email);
            res.json({"result":result.rowCount, "token":token,'user': name });
        // }
         }); 
    });
}


















exports.getQuestion = function(req, res){
    dbs.getQuestions((err, questions)=>{
        if(err) throw err;
        res.json({"quizque":questions});
    })
}




exports.login = function(req,res){
    var uname = req.body.userName;
    var pwd = req.body.userpassword;

    token=req.token;
 dbs.select(uname,function(err,result)
 {
        if(err) throw err;

        if(result.length>0)
        {    
           

  /** 
   * validation of enc-rypted password
   */
            encypt.dec(pwd,result[0].password,(data)=>{
               if(err)throw err;              
               
                 if(data == true )
                      {
                        req.session.uname = uname;
                         res.json({
                             "token":  token,
                              "message":"Login Success",
                              "valid" :1,
                                "user" : uname
                       
                        })
                  
                      }
                     
                      else{
                          res.json({
                            "message":"invalid password!!",
                            "invalid":"0"
                          })

                        }

                  })
        }
        else{
            res.json({
                "message":"invalid user!!",
                "invalid":"-1"
            })
        }  

    });

}
