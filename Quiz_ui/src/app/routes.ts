import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from  '@angular/router'
import { ResultComponent } from './result/result.component';
import { YGuard } from './shared/y.guard'
 import {QuizLoginComponent} from './quiz-login/quiz-login.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

// export const appRoutes : Routes = [
//     {path : 'register', component : RegisterComponent },
//     { path : 'quiz' , component : QuizComponent,
     
//        CanActivate: [YGuard]},
//     {path : 'result', component : ResultComponent},
//     {path: 'login', component : QuizLoginComponent},
//     {path : '', redirectTo : '/register',pathMatch: 'full'}
 
// ];