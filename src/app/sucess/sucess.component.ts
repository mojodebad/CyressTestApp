import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {
data:string;
  constructor(private router:Router) {
    this.data="";
   }

  ngOnInit(): void {
  }
 OpenDialog(){

 }
 back(){
   this.router.navigate([""]);
 }
}
