import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModalRoutingModule } from './bootstrap-modal-routing.module';
import { BootstrapModalComponent } from './bootstrap-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BootstrapModalComponent],
  imports: [
    CommonModule,
    BootstrapModalRoutingModule,
    NgbModule, // bootstrap
  ],
})
export class BootstrapModalModule {}
