import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KidsComponent } from './kids.component';

const routes: Routes = [
  {
    path: 'kids', component: KidsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class KidsRoutingModule { }
