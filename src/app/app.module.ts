import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './Componentes/Informacion/info/info.component';
import { InicioComponent } from './Componentes/Inicio/inicio/inicio.component';
import { NavbarComponent } from './Componentes/Navbar/navbar/navbar.component';
import { PaquetesComponent } from './Componentes/Paquetes/paquetes/paquetes.component';
import { PaquetesInterComponent } from './Componentes/PaquetesInter/paquetes-inter/paquetes-inter.component'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../assets/Rutas/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InicioComponent,
    NavbarComponent,
    PaquetesComponent,
    PaquetesInterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
