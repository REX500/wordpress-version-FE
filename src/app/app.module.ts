import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './root/app.component';

import { components } from './app.components';

import { StorageService } from './services/storage.service';
import { LookupsService } from './services/lookups.service';

@NgModule({
  declarations: [components],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Ng2Webstorage
  ],
  providers: [StorageService, LookupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
