import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DatabaseService{

    url = 'http://localhost/php/';

    constructor(private http: HttpClient){ }

        mostrarTodos(){
            console.log("Recibido");
                return this.http.get(`${this.url}getall.php`);
        }

        agregar(Paquete:string){
            console.log(Paquete);

            return this.http.post(`${this.url}post.php`, JSON.stringify(Paquete));
        }
}