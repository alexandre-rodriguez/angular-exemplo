import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais.component';

const routes: Routes = [
  {
    path: '',
    component: BotaoMidiasSociaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotaoMidiasSociaisRoutingModule { }
