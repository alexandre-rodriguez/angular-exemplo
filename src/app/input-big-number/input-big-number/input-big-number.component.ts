import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-big-number',
  templateUrl: './input-big-number.component.html',
  styleUrls: ['./input-big-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputBigNumberComponent,
    },
  ],
})
export class InputBigNumberComponent implements ControlValueAccessor {
  _valor: string = '';

  // https://stackblitz.com/edit/angular-ivy-ot3gen?file=src%2Fapp%2Finput-big-numbeer%2Finput-big-numbeer.component.html

  writeValue(valor: any): void {
    this._valor = valor;
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
}
