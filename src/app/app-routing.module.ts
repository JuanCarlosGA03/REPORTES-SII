import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Paginas enrutadas del head
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

import { PagesComponent } from './pages/pages.component';
import { AutenticateGuard } from './shared/guards/autenticate.guard';
import { AuthorizeGuard } from './shared/guards/authorize.guard';
import { SideNavComponent } from './shared/side-nav/side-nav.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "", component: PagesComponent, 
    canActivate:[AutenticateGuard, AuthorizeGuard], 
    canActivateChild: [AutenticateGuard,AuthorizeGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "reportes", component: ReportesComponent},
      { path: "admin", component: AdminComponent },
      { path: "sidenav", component: SideNavComponent}
      //{ path: "**", pathMatch: "full", redirectTo: '/login' }
    ]
  },
  { path: "**", pathMatch: "full", redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
