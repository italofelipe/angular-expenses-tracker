import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { makeServer } from './app/mirageServer'
import { isDevMode } from '@angular/core';
if(isDevMode()) {
  makeServer()
}
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
