import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { EditSubcategoryComponent } from './edit-subcategory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration-panel/edit-subcategories', component: EditSubcategoryComponent,
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
export class EditSubcategoryRoutingModule { }
