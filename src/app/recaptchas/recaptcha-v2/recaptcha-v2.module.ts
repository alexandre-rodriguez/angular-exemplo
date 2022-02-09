import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaV2RoutingModule } from './recaptcha-v2-routing.module';
import { RecaptchaV2Component } from './recaptcha-v2.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecaptchaV2Component],
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV2RoutingModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ]
})
export class RecaptchaV2Module { }
