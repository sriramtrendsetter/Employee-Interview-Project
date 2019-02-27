
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encryptpwd=  function encrypt(pwd,callback) 
 {
     console.log("in crpto");
     
    bcrypt.hash(pwd, saltRounds, function(err, hash) {
        if(err) throw err;
console.log(hash);


      callback(hash)
      
     
      });
 }




 exports.dec= function checkpass(pwdcheck,encpwd,callback)
 {


        bcrypt.compare(pwdcheck,encpwd, function(err, res) {
            if(err) throw err;
          
            callback(res)
        });
  
    
 }

//   dec("pwd",(err,data)=>{
//       if(err)throw err;
//       console.log(data);
      
//   })



// var enc="718798442"
// var dbpwd="";
// encryptpwd(enc,(data)=>{
//     // if(err)throw err;
//       dbpwd+=data
//       console.log("in employyeee file"+dbpwd);
      
//  });
