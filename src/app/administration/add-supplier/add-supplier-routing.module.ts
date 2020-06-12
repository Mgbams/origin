import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { AddSupplierComponent } from './add-supplier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration-panel/add-suppliers/:id', component: AddSupplierComponent,
    canActivate: [MyAccountGuard]
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
