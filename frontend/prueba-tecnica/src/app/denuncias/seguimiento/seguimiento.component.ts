import { Component } from '@angular/core';
import { DetalleDenunciaService } from '../../core/services/detalle_denuncia/detalle-denuncia.service';
import { ActivatedRoute } from '@angular/router';
import { Detalle_Denuncia } from '../../core/interfaces/denuncias/detalle_denuncia';

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css'
})
export class SeguimientoComponent {
  detalle_denuncia: Detalle_Denuncia = {
    id_detalle_denuncia:0,
    fecha:"",
    descripcion:"",
    status:0
  }

  folio: string =""

  status: any = ""


  constructor(private detalle_denunciaService: DetalleDenunciaService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.detalle_denuncia.id_detalle_denuncia = params['id']
      this.folio = params['folio']
    });
    this.obtenerDetalleDenuncia();
    let estadosDenuncia = new Map<number,string>();
    estadosDenuncia.set(1,'Abierta');
    estadosDenuncia.set(2,'Finalizada');
    estadosDenuncia.set(3,'Cancelada');
    this.status = estadosDenuncia.get(this.detalle_denuncia.status);
  }

  obtenerDetalleDenuncia(){
    this.detalle_denunciaService.obtenerDetalleDenuncia(this.detalle_denuncia.id_detalle_denuncia).subscribe((data) => {
      this.detalle_denuncia = data
      console.log(data)
      console.log(this.detalle_denuncia);
    });
  }  
}

