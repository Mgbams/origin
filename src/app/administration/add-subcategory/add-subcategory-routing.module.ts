import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddSubcategoryComponent } from './add-subcategory.component';

const routes: Routes = [
  {
    path: 'administration-panel/add-subcategory/:id', component:  AddSubcategoryComponent,
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
export class AddSubcategoryRoutingModule { }
