import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : "login" , component : LoginComponent},
  {path: "signUp", component : SignupComponent},
  {path: "databinding", component: DatabindingComponent},
  {path: "directives", component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
