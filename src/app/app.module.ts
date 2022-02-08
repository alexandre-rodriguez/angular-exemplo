import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { MapaLeafletComponent } from './mapa-leaflet/mapa-leaflet.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais/botao-midias-sociais.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RecaptchaV3Module, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { RecaptchaV2Component } from './recaptcha-v2/recaptcha-v2.component';
import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { LoggerComponent } from './logger/logger.component';
import { HighcartsComponent } from './highcarts/highcarts.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { RecaptchaV3Component } from './recaptcha-v3/recaptcha-v3.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { EmailValidatorDirective } from './form-validation/email-validator.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
    NgxToastrComponent,
    InternacionalizacaoComponent,
    MapaLeafletComponent,
    BotaoMidiasSociaisComponent,
    RecaptchaV2Component,
    LoggerComponent,
    HighcartsComponent,
    SpinnerComponent,
    RecaptchaV3Component,
    FormValidationComponent,
    EmailValidatorDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    NgbModule, // bootstrap

    ToastrModule.forRoot({  // ngx-toastr
      timeOut: 50000, // 5 seconds
      closeButton: true,
      progressBar: true,
    }),

    TranslateModule.forRoot({ // ngx-translate
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),

    ShareButtonsModule,
    ShareIconsModule,

    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,

    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
      serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
      serverLoggingUrl: environmentConfig.serverUrl,
    } as any),

    NgxSpinnerModule,
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },
  {
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptchav3.siteKey,
  },
],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
