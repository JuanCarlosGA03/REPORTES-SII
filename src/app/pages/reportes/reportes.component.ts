import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material/table'; 

import {Sort} from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: []
})
export class ReportesComponent implements OnInit {

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  
  constructor(private dataService: ReportesService){}

  ngOnInit() {
    this.rp_Tabla();
    console.log(this.dataSource.sort = this.sort);
  }

  rp_Tabla() {  
    this.dataService.get_rpAcreditaciones()  
      .subscribe(  
          x => {  
    this.dataSource = new MatTableDataSource();  
    this.dataSource.data = x;  
    console.log(this.dataSource.data);
    this.dataSource.sort = this.sort;
    },  
    error => {  
      console.log('Error' + error);  
    });  
  }
  filtrado(filtrar: string){
    filtrar = filtrar.trim();
    filtrar = filtrar.toLocaleLowerCase();
    this.dataSource.filter = filtrar;
  }

  displayedColumns = ['CEDULA ECE/OC', 'RAZON SOCIAL ECE/OC', 'CEDULA CE/EL', 'NOMBRE COMPLETO/RAZON SOCIAL CE', "CODIGO", "TITULO EC", "FECHA FINAL VIGENCIA", "ESTATUS", "ENTIDAD FEDERETIVA"];
  dataSource: any;

}
