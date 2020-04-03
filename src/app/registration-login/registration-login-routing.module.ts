import { Routes, RouterModule } from '@angular/router';
import { RegistrationLoginComponent } from './registration-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'register-login', component: RegistrationLoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RegistrationLoginRoutingModule { }
