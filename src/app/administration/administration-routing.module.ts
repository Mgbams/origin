import { AdministrationComponent } from './administration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationLoginGuard } from './../authentication-guards/registration-login.guard';


const routes: Routes = [
  {
    path: 'administration-panel', component: AdministrationComponent,
    // canActivate: [RegistrationLoginGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AdministrationRoutingModule { }
