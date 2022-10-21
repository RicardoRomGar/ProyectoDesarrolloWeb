import { Component, OnInit } from '@angular/core';
import { PaquetesService } from 'src/service/paquetes.service';
import { Route } from '@angular/router';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  PaqueteList: any[]=[];
  constructor(private PaqueteSvc:PaquetesService) {
    this.PaqueteSvc.getAll().subscribe((result:any)=>{
      this.PaqueteList = result;
      console.log(result);
    })
   }

  ngOnInit(): void {
  }
}
