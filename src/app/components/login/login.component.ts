import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { toast } from 'angular2-materialize';
import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  innerWidth = window.screen.width;

  // fields for login
  email: string;
  password: string;

  // form elements bellow
  rForm: FormGroup;
  post: any;
  // alerts
  emailAlert = 'Email is a required field!';
  passwordAlert = 'Password is a required field!';

  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private router: Router) {
                // forms
                this.rForm = fb.group({
                  'email': [null, Validators.required],
                  'password': [null, Validators.required]
              });
  }

  ngOnInit() {
  }

  // login function
  login(post) {
    if (post.email !== undefined && post.password !== undefined) {
      this.loginService.login(post).subscribe(
        (res) => {
          this.router.navigate(['']);
          toast('Logged in!', 2000, '#c4b7a6');
        },
        (err) => {
          toast(err, 2000, 'red');
        }
      )
    }
}

}
