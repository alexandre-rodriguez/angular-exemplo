import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighcartsComponent } from './highcarts.component';

const routes: Routes = [
  {
    path: '',
    component: HighcartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighcartsRoutingModule {}
