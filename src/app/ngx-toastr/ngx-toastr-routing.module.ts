import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxToastrComponent } from './ngx-toastr.component';

const routes: Routes = [
  {
    path: '',
    component: NgxToastrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxToastrRoutingModule {}
