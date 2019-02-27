import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class QuizService {
    linkUrl: string = "http://localhost:4213"
    constructor(private _http:HttpClient){

    }

   
    userRegisterService(data,success){
     this._http.post(this.linkUrl+"/register",data).subscribe((data)=>{
         console.log("in service");
         
         success(data)
     })
    }

   getQuestions(question){
    return   this._http.get(this.linkUrl+"/quiz").subscribe((data)=>{
        // console.log(data);
       
        question(data)
      })  
  
   }


}