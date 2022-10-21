import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../app/Componentes/Inicio/inicio/inicio.component'
import { InfoComponent } from '../../app/Componentes/Informacion/info/info.component'

const routes: Routes = [
  {path: '' ,component:InicioComponent},
  {path: 'Inicio',component:InicioComponent},
  {path: 'Info' ,component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,
  relativeLinkResolution: 'legacy'}), ],

  exports: [RouterModule]
})
export class AppRoutingModule { }