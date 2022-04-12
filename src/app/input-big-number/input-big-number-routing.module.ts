import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputBigNumberExemploComponent } from './input-big-number-exemplo.component';

const routes: Routes = [
  {
    path: '',
    component: InputBigNumberExemploComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputBigNumberRoutingModule {}
