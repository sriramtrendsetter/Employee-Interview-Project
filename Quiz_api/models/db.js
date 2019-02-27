const {Pool} = require('pg');
let que = require('./query')


let pool = new Pool({
    user: "postgres", // user name to your postgre sql database
    host: "localhost", // ip address of server running postgre sql
    database: "quizdb", // use this database to querying context
    password: "sriram", // corresponding password
    port: 5432
  });

  function register(data,callback){
      pool.query(que.register,data,function(err, result, fields){
          if(err) throw err;
          callback(null, result);
      })
  }




  function getQuestions(callback){
      pool.query(que.getQuestions,function(err, result){
          if(err) throw err;
          console.log(result.rows);
          
          callback(null, result.rows);
      })
  }

  function select(user,callback){
    pool.query(que.sel,[user],function(err,result,fields){
              if(err) throw err;
              console.log(result);
              
              callback(null,result.rows);
           });
  }




  module.exports = {register, getQuestions,select};