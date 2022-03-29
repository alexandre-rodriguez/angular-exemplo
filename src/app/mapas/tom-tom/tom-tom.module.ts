import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomTomRoutingModule } from './tom-tom-routing.module';
import { TomTomComponent } from './tom-tom.component';

@NgModule({
  declarations: [TomTomComponent],
  imports: [CommonModule, TomTomRoutingModule],
})
export class TomTomModule {}
