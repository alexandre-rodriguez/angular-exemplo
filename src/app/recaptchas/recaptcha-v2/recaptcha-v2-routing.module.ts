import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaV2Component } from './recaptcha-v2.component';

const routes: Routes = [
  {
    path: '',
    component: RecaptchaV2Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecaptchaV2RoutingModule { }
