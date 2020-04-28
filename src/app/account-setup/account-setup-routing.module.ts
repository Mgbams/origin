import { CanEnterAccountSetupGuard } from './../authentication-guards/can-enter-account-setup.guard';
import { AccountSetupComponent } from './account-setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'account-setup', component: AccountSetupComponent,
    canActivate: [ CanEnterAccountSetupGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AccountSetupRoutingModule { }
