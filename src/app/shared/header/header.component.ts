import { AppComponent } from './../../app.component';
import { ReportesComponent } from './../../pages/reportes/reportes.component';
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthorizationService) { }

  ngOnInit() {
  }

}
