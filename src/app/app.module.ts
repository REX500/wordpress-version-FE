import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './root/app.component';

import { components } from './app.components';
import { routing } from './app.routing';


import { StorageService } from './services/storage.service';
import { LookupsService } from './services/lookups.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [components, UserComponent],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Ng2Webstorage,
    ReactiveFormsModule
  ],
  providers: [StorageService, LookupsService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
