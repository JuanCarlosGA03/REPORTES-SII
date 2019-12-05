import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private auth:AuthorizationService) { }

  ngOnInit() {
    console.log( this.auth.validate_login());
    
  }

}
