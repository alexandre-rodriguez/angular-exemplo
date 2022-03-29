import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MapasComponent } from './mapas.component';

@NgModule({
  declarations: [MapasComponent],
  imports: [CommonModule, MapasRoutingModule],
})
export class MapasModule {}
