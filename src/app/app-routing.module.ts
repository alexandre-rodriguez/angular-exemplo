import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';

const routes: Routes = [
  { path: 'root', component: AppComponent },
  {
    path: 'bootstrap-modal',
    component: BootstrapModalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
