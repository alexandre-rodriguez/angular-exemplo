import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighcartsComponent } from './highcarts.component';
import { HighcartsRoutingModule } from './highcarts-routing.module';

@NgModule({
  declarations: [HighcartsComponent],
  imports: [CommonModule, HighcartsRoutingModule],
})
export class HighcartsModule {}
