import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { HighcartsComponent } from './highcarts/highcarts.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { CustomCounterModule } from './custom-counter/custom-counter.module';

const routes: Routes = [
  { path: 'root', component: AppComponent },
  {
    path: 'bootstrap-modal',
    loadChildren: () =>
      import('./bootstrap-modal/bootstrap-modal.module').then(
        m => m.BootstrapModalModule
      ),
  },
  {
    path: 'ngx-toastr',
    loadChildren: () =>
      import('./ngx-toastr/ngx-toastr.module').then(m => m.NgxToastrModule),
  },
  {
    path: 'internacionalizacao',
    loadChildren: () =>
      import('./internacionalizacao/internacionalizacao.module').then(
        m => m.InternacionalizacaoModule
      ),
  },
  {
    path: 'botoes-midias-sociais',
    loadChildren: () =>
      import('./botao-midias-sociais/botao-midias-sociais.module').then(
        m => m.BotaoMidiasSociaisModule
      ),
  },
  {
    path: 'logger',
    loadChildren: () =>
      import('./logger/logger.module').then(m => m.LoggerInternalModule),
  },
  {
    path: 'highcharts',
    loadChildren: () =>
      import('./highcarts/highcarts.module').then(m => m.HighcartsModule),
  },
  {
    path: 'spinner',
    loadChildren: () =>
      import('./spinner/spinner.module').then(m => m.SpinnerModule),
  },
  {
    path: 'form-validation',
    loadChildren: () =>
      import('./form-validation/form-validation.module').then(
        m => m.FormValidationModule
      ),
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapas/mapas.module').then(m => m.MapasModule),
  },
  {
    path: 'recaptcha',
    loadChildren: () =>
      import('./recaptchas/recaptchas.module').then(m => m.RecaptchasModule),
  },
  {
    path: 'custom-form-control',
    loadChildren: () =>
      import('./custom-counter/custom-counter.module').then(
        m => m.CustomCounterModule
      ),
  },
  {
    path: 'input-big-number-exemplo',
    loadChildren: () =>
      import('./input-big-number/input-big-number.module').then(
        m => m.InputBigNumberModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
