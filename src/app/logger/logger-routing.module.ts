import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggerComponent } from './logger.component';

const routes: Routes = [
  {
    path: '',
    component: LoggerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggerRoutingModule {}
