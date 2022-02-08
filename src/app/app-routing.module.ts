import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { MapaLeafletComponent } from './mapa-leaflet/mapa-leaflet.component';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais/botao-midias-sociais.component';
import { RecaptchaV2Component } from './recaptcha-v2/recaptcha-v2.component';
import { LoggerComponent } from './logger/logger.component';
import { HighcartsComponent } from './highcarts/highcarts.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RecaptchaV3Component } from './recaptcha-v3/recaptcha-v3.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TomTomComponent } from './tom-tom/tom-tom.component';

const routes: Routes = [
  { path: 'root', component: AppComponent },
  {
    path: 'bootstrap-modal',
    component: BootstrapModalComponent,
  },
  {
    path: 'ngx-toastr',
    component: NgxToastrComponent,
  },
  {
    path: 'internacionalizacao',
    component: InternacionalizacaoComponent,
  },
  {
    path: 'mapa-leaflet',
    component: MapaLeafletComponent,
  },
  {
    path: 'mapa-tomtom',
    component: TomTomComponent,
  },
  {
    path: 'botoes-midias-sociais',
    component: BotaoMidiasSociaisComponent,
  },
  {
    path: 'recaptcha-v2',
    component: RecaptchaV2Component,
  },
  {
    path: 'recaptcha-v3',
    component: RecaptchaV3Component,
  },
  {
    path: 'logger',
    component: LoggerComponent,
  },
  {
    path: 'highcharts',
    component: HighcartsComponent,
  },
  {
    path: 'spinner',
    component: SpinnerComponent,
  },
  {
    path: 'form-validation',
    component: FormValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
