import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerRoutingModule } from './logger-routing.module';
import { LoggerComponent } from './logger.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from '../../environments/environment';

const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [LoggerComponent],
  imports: [
    CommonModule,
    LoggerRoutingModule,

    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
      serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
      serverLoggingUrl: environmentConfig.serverUrl,
    } as any),
  ]
})
export class LoggerInternalModule { }
