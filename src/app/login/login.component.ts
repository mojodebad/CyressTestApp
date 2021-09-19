import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router) { 
    this.username='';
    this.password='';
  }

  ngOnInit(): void {
  }
  toSucess(){
    sessionStorage.setItem("User",this.username);
    this.router.navigate(["success"]);
  }
}
