import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

const keys = {
  lookups: 'lookups'
};

Injectable();
export class StorageService {
  constructor( @Inject(LocalStorageService) private localStorage: LocalStorageService ) { }

  // functionality of the local storage
  private save(key: string, object: any): void { this.localStorage.store(key, object); }
  private get(key: string): any { return this.localStorage.retrieve(key); }
  delete(key: string): void { this.localStorage.clear(key); }

  // actual keys - response from backend will go into these keys
  get lookups(): any[] { return this.get(keys.lookups); }
  set lookups( lookups: any[]) {this.save(keys.lookups, lookups); }
}
