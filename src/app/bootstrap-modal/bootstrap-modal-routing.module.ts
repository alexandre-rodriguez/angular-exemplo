import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapModalComponent } from './bootstrap-modal.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapModalRoutingModule { }
