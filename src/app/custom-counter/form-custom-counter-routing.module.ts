import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCustomCounterComponent } from './form-custom-counter.component';

const routes: Routes = [
  {
    path: '',
    component: FormCustomCounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCustomCounterComponentRoutingModule {}
