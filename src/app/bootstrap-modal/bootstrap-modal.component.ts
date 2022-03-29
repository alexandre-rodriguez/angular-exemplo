import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss'],
})
export class BootstrapModalComponent {
  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    let ref = this.modalService.open(modal);

    ref.closed.subscribe(resultado => console.log(resultado));
    ref.dismissed.subscribe(resultado => console.log(resultado));
  }
}
