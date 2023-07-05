import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }

    console.log(loginForm.value.username)
  }
}
