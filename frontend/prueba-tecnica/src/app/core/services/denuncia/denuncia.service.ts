import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle_Denuncia } from '../../interfaces/denuncias/detalle_denuncia';
import { Stored_Denuncia } from '../../interfaces/denuncias/stored_denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  urlBase = 'http://localhost:3000';

  headers = new HttpHeaders({
    'Content-Type': 'application/json' // Establece el tipo de contenido
  });

  constructor(private http: HttpClient) { }

  crearDenuncia(denuncia: any){
    const headers = this.headers;
    this.http.post(`${this.urlBase}/denuncias`, denuncia, { headers }).subscribe((data) => {
      console.log(data);
    })
  }

  obtenerDenuncias(credenciales: any): Observable<Stored_Denuncia[]>{ 
    const headers = this.headers;
    credenciales = JSON.stringify(credenciales);
    return this.http.post<Stored_Denuncia[]>(`${this.urlBase}/admin`, credenciales, { headers });
  }

  obtenerDenuncia(credenciales: any): Observable<Stored_Denuncia[]>{ 
    const headers = this.headers;
    credenciales = JSON.stringify(credenciales);
    return this.http.post<Stored_Denuncia[]>(`${this.urlBase}/denuncias/seguimiento`, credenciales, { headers });
  }



}
