import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSubcategoryComponent } from './add-subcategory.component';
import {RegistrationLoginGuard} from './../../authentication-guards/registration-login.guard';

const routes: Routes = [
  {
    path: 'administration-panel/add-subcategory/:id', component:  AddSubcategoryComponent,
    canActivate: [RegistrationLoginGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AddSubcategoryRoutingModule { }
