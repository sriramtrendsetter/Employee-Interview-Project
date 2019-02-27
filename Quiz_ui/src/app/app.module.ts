import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'



import { Routes } from '@angular/router';
import { YGuard } from './shared/y.guard'
// import {appRoutes} from './routes'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizService } from "./shared/quiz.service"
 import { TokenInterceptorServiceService } from './shared/intercepter.service'
  import { RouterService} from './shared/router.service';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { AddQuizQnsComponent } from './add-quiz-qns/add-quiz-qns.component'








export const appRoutes : Routes = [
  {path : 'register', component : RegisterComponent },
 
     {
      path : "quiz", 
      component : QuizComponent,
      
      
    },
  {path : 'result', component : ResultComponent},
  {path: 'login', component : QuizLoginComponent},
  {path : '**', redirectTo : 'register',pathMatch: 'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    QuizLoginComponent,
    AddQuizQnsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [QuizService,RouterService,YGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
