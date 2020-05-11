import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccessoiresComponent } from './accessoires.component';

const routes: Routes = [
  {
    path: 'men/accessoires', component: AccessoiresComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AccessoiresRoutingModule { }
