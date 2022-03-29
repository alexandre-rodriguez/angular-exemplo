import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormValidationComponent, EmailValidatorDirective],
  imports: [CommonModule, FormsModule, FormValidationRoutingModule],
})
export class FormValidationModule {}
