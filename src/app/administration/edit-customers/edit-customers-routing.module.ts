import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { EditCustomersComponent } from './edit-customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'administration-panel/edit-customers', component: EditCustomersComponent,
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
export class EditCustomersRoutingModule { }
