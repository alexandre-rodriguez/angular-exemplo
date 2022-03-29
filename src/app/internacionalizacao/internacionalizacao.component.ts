import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internacionalizacao',
  templateUrl: './internacionalizacao.component.html',
  styleUrls: ['./internacionalizacao.component.scss'],
})
export class InternacionalizacaoComponent {
  constructor(public translateService: TranslateService) {}

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
