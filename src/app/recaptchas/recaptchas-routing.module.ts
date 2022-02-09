import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchasComponent } from './recaptchas.component';

const routes: Routes = [
  {
    path: 'v2',
    loadChildren: () => import('./recaptcha-v2/recaptcha-v2.module').then(m => m.RecaptchaV2Module),
  },
  {
    path: 'v3',
    loadChildren: () => import('./recaptcha-v3/recaptcha-v3.module').then(m => m.RecaptchaV3InternalModule),
  },
  { path: '', component: RecaptchasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecaptchasRoutingModule { }
