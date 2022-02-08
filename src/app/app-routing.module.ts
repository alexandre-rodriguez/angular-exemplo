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
    path: 'botoes-midias-sociais',
    component: BotaoMidiasSociaisComponent,
  },
  {
    path: 'recaptcha-v2',
    component: RecaptchaV2Component,
  },
  {
    path: 'logger',
    component: LoggerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
