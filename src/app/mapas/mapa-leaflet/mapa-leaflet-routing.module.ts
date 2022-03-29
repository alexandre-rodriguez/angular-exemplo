import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaLeafletComponent } from './mapa-leaflet.component';

const routes: Routes = [
  {
    path: '',
    component: MapaLeafletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaLeafletRoutingModule {}
