import {TermsAndConditionsComponent } from './terms-and-conditions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'terms-and-conditions', component: TermsAndConditionsComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TermsAndConditionsRoutingModule { }
