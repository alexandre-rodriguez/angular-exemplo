import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TomTomComponent } from './tom-tom.component';

const routes: Routes = [
  {
    path: '',
    component: TomTomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomTomRoutingModule { }
