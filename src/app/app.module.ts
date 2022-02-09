import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BootstrapModalModule } from './bootstrap-modal/bootstrap-modal.module';
import { BotaoMidiasSociaisModule } from './botao-midias-sociais/botao-midias-sociais.module';
import { NgxToastrModule } from './ngx-toastr/ngx-toastr.module';
import { InternacionalizacaoModule } from './internacionalizacao/internacionalizacao.module';


import { RecaptchaV2Module } from './recaptchas/recaptcha-v2/recaptcha-v2.module';
import { RecaptchaV3InternalModule } from './recaptchas/recaptcha-v3/recaptcha-v3.module';
import { LoggerInternalModule } from './logger/logger.module';
import { HighcartsModule } from './highcarts/highcarts.module';
import { SpinnerModule } from './spinner/spinner.module';
import { FormValidationModule } from './form-validation/form-validation.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
