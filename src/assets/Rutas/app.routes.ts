import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../app/Componentes/Inicio/inicio/inicio.component';
import { InfoComponent } from '../../app/Componentes/Informacion/info/info.component';
import { PaquetesComponent } from '../../app/Componentes/Paquetes/paquetes/paquetes.component';
import { PaquetesInterComponent } from '../../app/Componentes/PaquetesInter/paquetes-inter/paquetes-inter.component';
import { Paquetesint2Component } from '../../app/Componentes/Paquetesint2/paquetesint2/paquetesint2.component';
import { ComentsComponent } from '../../app/Componentes/Comentarios/coments/coments.component';

const routes: Routes = [
  {path: '' ,component:InicioComponent},
  {path: 'Inicio',component:InicioComponent},
  {path: 'Info' ,component:InfoComponent},
  {path: 'Paquetes' ,component:PaquetesComponent},
  {path: 'PaquetesInter' ,component:PaquetesInterComponent},
  {path: 'Paquetesint2' ,component:Paquetesint2Component},
  {path: 'Coments' ,component:ComentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,
  relativeLinkResolution: 'legacy'}), ],

  exports: [RouterModule]
})
export class AppRoutingModule { }