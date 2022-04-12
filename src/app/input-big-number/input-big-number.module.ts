import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBigNumberRoutingModule } from './input-big-number-routing.module';
import { InputBigNumberComponent } from './input-big-number/input-big-number.component';
import { InputBigNumberExemploComponent } from './input-big-number-exemplo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputBigNumberComponent, InputBigNumberExemploComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputBigNumberRoutingModule,
  ],
})
export class InputBigNumberModule {}
