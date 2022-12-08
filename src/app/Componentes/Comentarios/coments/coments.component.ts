import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/service/coments.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent {

  coments = null;
  comentsForm = new FormGroup({
    Username: new FormControl(''),
    Coment: new FormControl(''),
  });

  constructor(private SVC:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.SVC.mostrarTodos().subscribe((result:any)=>this.coments=result);
    console.log(this.coments);
  }
  
  /*Agregar(): void{
    this.SVC.agregar(this.comentsForm.value).subscribe(() => {
      this.mostrarTodos();
      this.comentsForm.reset('');
    })
  }*/

}
