import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxToastrRoutingModule } from './ngx-toastr-routing.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxToastrRoutingModule,
    ToastrModule.forRoot({  // ngx-toastr
      timeOut: 50000, // 5 seconds
      closeButton: true,
      progressBar: true,
    }),
  ]
})
export class NgxToastrModule { }
