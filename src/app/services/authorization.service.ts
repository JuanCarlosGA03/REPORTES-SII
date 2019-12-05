import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  user: any = null;
  token: string = null;
  modulos: any[] = null;

  constructor(private http: HttpClient, private router: Router) {
    this.validate_storage()
  }
  login(request: any) {

    let url: string = "http://localhost:57371/api/authorization/authenticate";
    return this.http.post(url, request).pipe(
      map((data: any) => {

        this.user = data;
        this.token = data.token;
        this.modulos = data.modules;
        console.log(this.user, this.token, this.modulos);
        localStorage.setItem("user", JSON.stringify(this.user));
        return true;
      })
    );
  }
  logout() {
    this.user = null;
    this.token = null;
    this.modulos = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  validate_storage() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.token = this.user.token;
      this.modulos = this.user.modules;
    }
  }

  validate_token(token:string){
    const decode = jwt_decode(token);
    if(decode.exp === undefined) return null;

    let fecha = new Date(0);
    fecha.setUTCSeconds(decode.exp);
    return fecha;
  }

  validate_login() {
    if(!this.token) return false;
    let fecha_exp = this.validate_token(this.token);
    if (!fecha_exp) return false;
    return (fecha_exp.valueOf() > new Date().valueOf());
  }


  

}
