import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-custom-counter',
  templateUrl: './form-custom-counter.component.html',
  styleUrls: ['./form-custom-counter.component.scss'],
})
export class FormCustomCounterComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      quantity: [60, [Validators.required, Validators.max(100)]],
    });
  }
}
