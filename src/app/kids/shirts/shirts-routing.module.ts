import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShirtsComponent } from './shirts.component';

const routes: Routes = [
  {
    path: 'kids/shirts', component: ShirtsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ShirtsRoutingModule { }
