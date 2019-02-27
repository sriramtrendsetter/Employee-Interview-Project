import { Component, OnInit } from '@angular/core';
import { RouterService } from "../shared/router.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:RouterService) { }

  ngOnInit() {
  }



  show(){
  
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    localStorage.removeItem('score');
  this.router.redirectToRegister();
 }
}
