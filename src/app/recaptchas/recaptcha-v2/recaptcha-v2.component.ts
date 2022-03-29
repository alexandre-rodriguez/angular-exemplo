import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recaptcha-v2',
  templateUrl: './recaptcha-v2.component.html',
  styleUrls: ['./recaptcha-v2.component.scss'],
})
export class RecaptchaV2Component {
  token: string | undefined;

  constructor() {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
}
