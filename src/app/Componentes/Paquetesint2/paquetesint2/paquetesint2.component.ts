import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/service/paquetesintsql';
import {Observable} from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-paquetesint2',
  templateUrl: './paquetesint2.component.html',
  styleUrls: ['./paquetesint2.component.css']
})
export class Paquetesint2Component {

  paquetesInt2 = null;
  interForm = new FormGroup({
    Destino: new FormControl(''),
    Salida: new FormControl(''),
    Precio: new FormControl(''),
    Duracion: new FormControl('')
  });

  constructor(private SVC:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarTodos();
    //this.Agregar();
  }

  mostrarTodos(){
    this.SVC.mostrarTodos().subscribe((result:any)=>this.paquetesInt2=result);
    console.log(this.paquetesInt2);
  }

  /*Agregar():void{
    this.SVC.agregar(this.interForm.value).subscribe(() => {
      this.mostrarTodos();
      this.interForm.reset('');
    })
  }*/
}
