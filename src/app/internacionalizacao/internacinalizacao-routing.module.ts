import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternacionalizacaoComponent } from './internacionalizacao.component';

const routes: Routes = [
  {
    path: '',
    component: InternacionalizacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternacionalizacaoRoutingModule { }
