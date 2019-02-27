import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service'
  
  import { RouterService } from "../shared/router.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any = {
    name : "",
    email : "",
    password: ""
  }


  constructor(private _quiz: QuizService, private router:RouterService ) { }
  emailpattren = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() {

 


  }


  registeruser(userDetails){
    console.log(userDetails);
    console.log(userDetails.userName);
    
        
    this._quiz.userRegisterService(userDetails,(data)=>{
      console.log("registered successfully");
      localStorage.clear();
      localStorage.setItem('token', data.token)
      localStorage.setItem('user',data.user);
      this.router.redirectToQuiz()
    })

  }

  loginRoute()
  {
    console.log("in login");
    
    this.router.directToLogin();
  }

}
