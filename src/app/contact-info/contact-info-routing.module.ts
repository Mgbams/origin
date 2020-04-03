import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info.component';

const routes: Routes = [
  {
    path: 'contact-info', component: ContactInfoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ContactInfoRoutingModule { }
