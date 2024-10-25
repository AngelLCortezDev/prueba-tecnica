import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalle_Denuncia } from '../../interfaces/denuncias/detalle_denuncia';

@Injectable({
  providedIn: 'root'
})
export class DetalleDenunciaService {

  urlBase = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerDetalleDenuncia(id: number){
    return this.http.get<Detalle_Denuncia>(`${this.urlBase}/denuncias/detalle_denuncia/${id}`);
  }

}
