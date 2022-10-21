import { Component, OnInit } from '@angular/core';
import { PaquetesService } from 'src/service/paquetes.service';
import { Route } from '@angular/router';
import { PaquetesServiceInt } from 'src/service/paquetesint.service';


@Component({
  selector: 'app-paquetesint',
  templateUrl: './paquetes-inter.component.html',
  styleUrls: ['./paquetes-inter.component.css']
})
export class PaquetesInterComponent implements OnInit {

  PaqueteListInt: any[]=[];
  constructor(private PaqueteSvc:PaquetesServiceInt) {
    this.PaqueteSvc.getAll().subscribe((result:any)=>{
      this.PaqueteListInt = result;
      console.log(result);
    })
   }

  ngOnInit(): void {
  }
}