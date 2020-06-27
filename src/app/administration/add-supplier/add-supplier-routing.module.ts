import { AddSupplierComponent } from './add-supplier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationLoginGuard} from './../../authentication-guards/registration-login.guard';

const routes: Routes = [
  {
    path: 'administration-panel/add-suppliers/:id', component: AddSupplierComponent,
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
export class AddSupplierRoutingModule { }
