import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternacionalizacaoRoutingModule } from './internacinalizacao-routing.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InternacionalizacaoComponent } from './internacionalizacao.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [InternacionalizacaoComponent],
  imports: [
    CommonModule,
    InternacionalizacaoRoutingModule,
    HttpClientModule,
    FormsModule,

    TranslateModule.forRoot({ // ngx-translate
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),

  ]
})
export class InternacionalizacaoModule { }
