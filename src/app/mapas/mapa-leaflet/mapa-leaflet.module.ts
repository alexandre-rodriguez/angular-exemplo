import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaLeafletRoutingModule } from './mapa-leaflet-routing.module';
import { MapaLeafletComponent } from './mapa-leaflet.component';

@NgModule({
  declarations: [MapaLeafletComponent],
  imports: [CommonModule, MapaLeafletRoutingModule],
})
export class MapaLeafletModule {}
