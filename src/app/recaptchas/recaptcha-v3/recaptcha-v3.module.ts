import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaV3RoutingModule } from './recaptcha-v3-routing.module';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { RecaptchaV3Component } from './recaptcha-v3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecaptchaV3Component],
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaV3Module,
    RecaptchaV3RoutingModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchav3.siteKey,
    },
  ],
})
export class RecaptchaV3InternalModule {}
