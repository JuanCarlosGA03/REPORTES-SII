import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styles: []
})
export class SideNavComponent implements OnInit {

  login: boolean;
  username: string;
  password: string;
  panelopen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
