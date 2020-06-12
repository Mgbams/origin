import { MyAccountGuard } from './../../authentication-guards/my-account.guard';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'myaccount/profile', component: ProfileComponent,
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
export class ProfileRoutingModule { }
