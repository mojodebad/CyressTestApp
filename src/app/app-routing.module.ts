import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [{
  path:"",
  pathMatch:"full",
  redirectTo:"login"
},{
  path:"login",
  component:LoginComponent
},
{
  component:SucessComponent,
  path:"success"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
