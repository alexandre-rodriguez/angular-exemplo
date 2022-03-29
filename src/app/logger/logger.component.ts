import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent {
  constructor(private logger: NGXLogger) {}

  public showTrace(): void {
    this.logger.trace('TRACE level');
  }

  public showDebug(): void {
    this.logger.debug('DEBUG level');
  }

  public showInfo(): void {
    this.logger.info('INFO level');
  }

  public showWarn(): void {
    this.logger.warn('WARN level');
  }

  public showError(): void {
    this.logger.error('ERROR level');
  }

  public showFatal(): void {
    this.logger.fatal('FATAL level');
  }
}
