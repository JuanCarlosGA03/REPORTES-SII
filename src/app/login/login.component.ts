import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {

  }


  login(form: NgForm) {
    console.log(form);

    let acceso = {
    username: form.form.value.username,
    password: form.form.value.pass
    }

    this.auth.login(form.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);

    })


  }

}
