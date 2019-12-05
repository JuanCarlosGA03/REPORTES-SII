
//import { MatTableDataSource, MatSort } from '@angular/material';
//import { ReportesComponent } from './pages/reportes/reportes.component';
//import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private HttpClient: HttpClient){}

  //@ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(){
    
  }

  title = 'REPORTES-SII';
}
