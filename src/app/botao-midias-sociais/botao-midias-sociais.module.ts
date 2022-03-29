import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais.component';
import { BotaoMidiasSociaisRoutingModule } from './botao-midias-sociais-routing.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [BotaoMidiasSociaisComponent],
  imports: [
    CommonModule,
    BotaoMidiasSociaisRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
})
export class BotaoMidiasSociaisModule {}
