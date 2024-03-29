import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recaptcha-v3',
  templateUrl: './recaptcha-v3.component.html',
  styleUrls: ['./recaptcha-v3.component.scss'],
})
export class RecaptchaV3Component {
  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        console.debug(`Token [${token}] generated`);
      });
  }
}
