import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaV3Component } from './recaptcha-v3.component';

const routes: Routes = [
  {
    path: '',
    component: RecaptchaV3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecaptchaV3RoutingModule {}
