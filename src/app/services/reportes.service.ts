import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportesComponent } from '../pages/reportes/reportes.component';




@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http:HttpClient) { }

  public get_rpAcreditaciones():Observable<ReportesComponent[]>{
    return this.http.get<ReportesComponent[]>('http://localhost:57371/api/Reportes/get_acreditaciones');
  }
}
