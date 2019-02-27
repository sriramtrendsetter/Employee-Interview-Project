var express = require('express');
var path= require('path');
var bodyparser = require('body-parser');
var cors = require('cors');
var quiz = require('./routes/quiz');
var jwt = require('jsonwebtoken');
var session = require('express-session')


var app = express();

app.use(cors({credentials: true, origin: 'http://localhost:4200'}));




app.use(express.static(path.join(__dirname,'public')));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(session({
    
    secret: 'apple',    
    resave: false,
    saveUninitialized: true,
    cookie: {  maxAge: 160000 }
  }))



  
  function loginToken(req, res, next){
    req.token = jwt.sign({check:true},"whoami")
        
        console.log(req.token);
    
     next();
}

function secureCheck(req, res, next){

    var tokenWithBearer = req.headers['authorization'];
      console.log("checking");
      
    if( typeof tokenWithBearer !== 'undefined'){
        var token=tokenWithBearer.split(' ')

        jwt.verify(token[1], "whoami", (err,decoded)=>{
            if(err){
                res.json({success:false,message:"not a valid user"});
            }
            else{
                console.log("valid user");
                
                req.decoded = decoded;
                req.token=token[1];
                next();
            }
        })
    } 
    else {
  
        return res.status(403).send({ 
       
            message: 'No token provided.' 
        });
    
      }
}





// app.get('/home', employee.login);
// app.post('/home',loginToken, employee.validate);
// app.get('/employee', employee.list);
// // app.get('/registration',employee.registration);
// app.post('/registration/user',employee.register);
// // app.get('/add/:uname', employee.addTasks );
// app.post('/add',secureCheck, employee.save);
// //app.get('/edit/:Task',employee.editTasks);
// app.post('/edit',employee.editSave );
// app.get('/delete/:Task',employee.delete_employee);
// app.post('/id',employee.idCheck)
app.post('/register', loginToken, quiz.register);
app.post('/login',loginToken,quiz.login)
app.get('/quiz', secureCheck,quiz.getQuestion);



app.listen(4213, function(){
    console.log("server is running on port 4213")
});