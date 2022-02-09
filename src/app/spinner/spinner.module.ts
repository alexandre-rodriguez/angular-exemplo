import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner.component';
import { SpinnerRoutingModule } from './spinner-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    SpinnerRoutingModule
  ]
})
export class SpinnerModule { }
