import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapasComponent } from './mapas.component';

const routes: Routes = [
  {
    path: 'leaflet',
    loadChildren: () =>
      import('./mapa-leaflet/mapa-leaflet.module').then(
        m => m.MapaLeafletModule
      ),
  },
  {
    path: 'tomtom',
    loadChildren: () =>
      import('./tom-tom/tom-tom.module').then(m => m.TomTomModule),
  },
  { path: '', component: MapasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasRoutingModule {}
