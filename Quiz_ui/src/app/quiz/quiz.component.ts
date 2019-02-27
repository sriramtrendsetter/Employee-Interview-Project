import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service'
  
  import { RouterService } from "../shared/router.service";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

//------------Properties---------
qus:any=[];
opt:any=[];
answers:any=[];
position:number=0;
score:number=0;

  constructor(private _quiz:QuizService,private _router:RouterService) { }

  ngOnInit() {
 
    this._quiz.getQuestions((data)=>{
      console.log(typeof data);
        this.qus= data.quizque;

        this.qus

        console.log(this.qus[0].question,'done');

    })
  }




  
  answer(ans){
    this.score = 0;
    if(this.qus[0].answer===ans.ans1){
       this.score++;
    }
    if(this.qus[1].answer===ans.ans2){
      this.score++;
   }
   if(this.qus[2].answer===ans.ans3){
    this.score++;
   }
   if(this.qus[3].answer===ans.ans4){
    this.score++;
 }
 if(this.qus[4].answer===ans.ans5){
  this.score++;
}
let sc=this.score.toString();
  localStorage.setItem('score', sc );
  console.log(this.score);
    this._router.directToResult();

  }





}
