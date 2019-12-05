import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatPaginatorIntl } from '@angular/material';


//Mis componentes, estos mismos seran usados para el head
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';



//Aquí tammbien tengo que importarlos
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    LoginComponent,
    PagesComponent,
    ReportesComponent,
    SideNavComponent
  ],//Extras de aqui hasta abajo
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
