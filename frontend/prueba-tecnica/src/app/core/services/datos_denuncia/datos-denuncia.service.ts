import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../../interfaces/datos/empresa';
import { Pais } from '../../interfaces/datos/pais';
import { Estado } from '../../interfaces/datos/estado'

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

  obtenerEmpresa(id: number): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.urlBase}/empresas/${id}`);;
  }

  obtenerOpcionesPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.urlBase}/paises`);
  }

  obtenerPais(id: number): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.urlBase}/paises/${id}`);
  }

  obtenerOpcionesEstado(pais: number): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.urlBase}/paises/estados/${pais}`);
  }

  obtenerEstado(id: number): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.urlBase}/estados/${id}`);
  }


}
