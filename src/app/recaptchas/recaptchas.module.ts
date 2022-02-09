import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecaptchasRoutingModule } from './recaptchas-routing.module';
import { RecaptchasComponent } from './recaptchas.component';


@NgModule({
  declarations: [
    RecaptchasComponent
  ],
  imports: [
    CommonModule,
    RecaptchasRoutingModule
  ]
})
export class RecaptchasModule { }
