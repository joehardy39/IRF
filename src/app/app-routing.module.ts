import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CformComponent } from './cform/cform.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'reg',
    component:RegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'cust',
    component:CformComponent
  },
  {
    path: 'dash',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
