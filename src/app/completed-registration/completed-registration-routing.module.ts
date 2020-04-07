import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  CompletedRegistrationComponent } from './completed-registration.component';

const routes: Routes = [
  {
    path: 'completed-registration', component: CompletedRegistrationComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CompletedRegistrationRoutingModule { }
