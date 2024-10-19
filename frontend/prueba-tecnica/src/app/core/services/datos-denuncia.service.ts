import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/datos/empresa';
import { Pais } from '../interfaces/datos/pais';
import { Estado } from '../interfaces/datos/estado'

@Injectable({
  providedIn: 'root'
})
export class DatosDenunciaService {

  urlBase = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerOpcionesEmpresa(): Observable<Empresa[]>{
    const empresas = this.http.get<Empresa[]>(`${this.urlBase}/empresas`);
    return empresas;
  }

  obtenerOpcionesPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.urlBase}/paises`);
  }

  obtenerOpcionesEstado(pais: number): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.urlBase}/paises/estados/${pais}`);
  }


}
