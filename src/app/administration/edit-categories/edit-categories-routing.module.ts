import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import {EditCategoriesComponent} from './edit-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'administration-panel/edit-categories', component: EditCategoriesComponent,
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
export class EditCategoriesRoutingModule { }
