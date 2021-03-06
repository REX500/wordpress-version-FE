import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { toast } from 'angular2-materialize';
import { StorageService } from './../../services/storage.service';
import { LookupsService } from './../../services/lookups.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  innerWidth = window.screen.width;

  // fields for interaction with the html
  url: string;
  version: any;
  wordpress: any;
  // if true show version
  isVersion = false;
  introText = 'Welcome to wordpress lookup website. Enter a websites url to start :)';

  constructor(private storage: StorageService,
              private lookups: LookupsService) { }

  ngOnInit() {
    toast(this.introText, 5000, '#c4b7a6');
  }

  showUrl() {
    if (this.url !== '') {
      toast('Searching for ' + this.url + ' version', 2000, '#c4b7a6');
      // making a call to the backend
      this.lookups.getVersion(this.url).subscribe(
        (res) => {
          // checking if version is null
          if (this.storage.lookups === null) {
            this.version = 'Not a wordpress website';
            this.isVersion = true;
            this.url = '';
          } else {
            this.version = 'Version: ' + this.storage.lookups;
            this.isVersion = true;
            this.url = '';
          }
        }, (err) => {
          toast(err, 1500, 'red');
        }
      );
    }
  }

  // enter clicked to show url
  listenForKeyPress(event) {
    if (event.key === 'Enter' && this.url !== '') {
      if (this.valWebsite(this.url)) {
        this.showUrl();
      } else {
        toast('Bad url format', 2000, 'red');
      }
    }
  }

  valWebsite(input) {
    if (input === undefined) {
      return false;
    }
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    return regex.test(input);
  }

}
