import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { InternacionalizacaoComponent } from './internacionalizacao/internacionalizacao.component';
import { MapaLeafletComponent } from './mapa-leaflet/mapa-leaflet.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { BotaoMidiasSociaisComponent } from './botao-midias-sociais/botao-midias-sociais.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
    NgxToastrComponent,
    InternacionalizacaoComponent,
    MapaLeafletComponent,
    BotaoMidiasSociaisComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NgbModule, // bootstrap

    ToastrModule.forRoot({  // ngx-toastr
      timeOut: 50000, // 5 seconds
      closeButton: true,
      progressBar: true,
    }),

    TranslateModule.forRoot({ // ngx-translate
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),

    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
