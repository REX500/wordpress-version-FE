'use strict';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { StorageService } from './storage.service';

@Injectable()
export class LookupsService {
  baseUrl = 'http://localhost:3004/api/wordpress';

  constructor(private http: Http,
              private storage: StorageService) { }

  // get wordpress version
  getVersion(website): Observable<any> {
    return this.http.get(this.baseUrl + '/' + website).map(
      res => {
        // take the version out of the json body
        const response = res.json();
        // store response in local storage
        this.storage.lookups = response.version;
        return true;
      }, err => err
    );
  }
}
