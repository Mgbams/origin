import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { AddProductsComponent } from './add-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration-panel/add-products/:id', component: AddProductsComponent,
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
export class AddProductsRoutingModule { }
