import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-big-number-exemplo',
  templateUrl: './input-big-number-exemplo.component.html',
  styleUrls: ['./input-big-number-exemplo.component.scss'],
})
export class InputBigNumberExemploComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      valor: ['60'],
    });
  }
}
