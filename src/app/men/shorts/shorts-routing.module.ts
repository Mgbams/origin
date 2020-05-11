import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShortsComponent } from './shorts.component';

const routes: Routes = [
  {
    path: 'men/shorts', component: ShortsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ShortsRoutingModule { }
