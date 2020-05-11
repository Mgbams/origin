import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SneakersComponent } from './sneakers.component';

const routes: Routes = [
  {
    path: 'men/sneakers', component: SneakersComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SneakersRoutingModule { }
