'use strict';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';
import { StorageService } from './storage.service';

@Injectable()
export class LoginService {
  baseUrl = 'http://localhost:3004/api/auth/login';

  constructor(private http: Http,
              private storage: StorageService) { }

  login(data) {
    return this.http.post(this.baseUrl, data).map(
      (res) => {
        console.log(res.json().token);
        this.storage.token = res.json().token;
        return true;
      }, (err) => {
        return err;
      }
    )
  }

  loggedIn(): boolean{
    return tokenNotExpired('ng2-webstorage|token');
  }
}
