import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { EditSuppliersComponent } from './edit-suppliers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'administration-panel/edit-suppliers', component: EditSuppliersComponent,
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
export class EditSuppliersRoutingModule { }
