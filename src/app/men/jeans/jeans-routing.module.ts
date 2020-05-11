import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JeansComponent } from './jeans.component';

const routes: Routes = [
  {
    path: 'men/jeans', component: JeansComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class JeansRoutingModule { }
