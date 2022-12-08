import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../app/Modelos/comentario';

@Injectable({
    providedIn: 'root'
})

export class DatabaseService{

    url = 'http://localhost/phpcoment/';

    constructor(private http: HttpClient){ }

        mostrarTodos(){
            console.log("Recibido");
                return this.http.get(`${this.url}getall.php`);
        }

        agregar(Coment:string){
            return this.http.post(`${this.url}post.php`, JSON.stringify(Coment));
        }
}