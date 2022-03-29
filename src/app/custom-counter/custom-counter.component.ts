import { Component, Input, OnInit } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
} from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomCounterComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomCounterComponent,
    },
  ],
})
export class CustomCounterComponent implements ControlValueAccessor, Validator {
  counter = 0;

  touched = false;

  disabled = false;

  @Input()
  increment!: number;

  onChange = (counter: number) => {};
  onTouched = () => {};

  constructor() {}

  onAdd() {
    this.markAsTouched();
    this.counter += this.increment;
    this.onChange(this.counter);
  }

  onRemove() {
    this.markAsTouched();
    this.counter -= this.increment;
    this.onChange(this.counter);
  }

  writeValue(counter: number) {
    this.counter = counter;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const counter = control.value;
    if (counter <= 0) {
      return {
        mustBePositive: {
          counter,
        },
      };
    }

    return null;
  }
}
