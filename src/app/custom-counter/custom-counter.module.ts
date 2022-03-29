import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCounterComponent } from './custom-counter.component';
import { FormCustomCounterComponent } from './form-custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCustomCounterComponentRoutingModule } from './form-custom-counter-routing.module';

@NgModule({
  declarations: [CustomCounterComponent, FormCustomCounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormCustomCounterComponentRoutingModule,
  ],
})
export class CustomCounterModule {}
