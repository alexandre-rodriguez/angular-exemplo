import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  typeSelected: string;

  constructor(private spinnerService: NgxSpinnerService) {
    this.typeSelected = 'ball-fussion';
  }

  public showSpinner(): void {
    console.log(this.typeSelected);

    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }
}
