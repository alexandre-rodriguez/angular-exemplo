import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { MapaLeafletComponent } from './mapa-leaflet/mapa-leaflet.component';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais/botao-midias-sociais.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
