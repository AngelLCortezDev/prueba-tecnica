import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DatosDenunciaService } from '../../core/services/datos-denuncia.service';
import { Empresa } from '../../core/interfaces/datos/empresa';
import { Pais } from '../../core/interfaces/datos/pais';
import { Estado } from '../../core/interfaces/datos/estado';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  opcionesEmpresa: any[] = [];
  opcionesPais: any[] = [];
  opcionesEstado: any[] = [];

  seleccionEmpresa: any[] = [];
  seleccionPais: any[];
  seleccionEstado: any[] = [];

  constructor(private datos_denunciaService: DatosDenunciaService) {}

  ngOnInit() {
    this.cargarOpcionesEmpresa();
    this.cargarOpcionesPais();
  }

  cargarOpcionesEmpresa() {
    this.datos_denunciaService.obtenerOpcionesEmpresa().subscribe((data) => {
      this.opcionesEmpresa = data.map((estado) => ({
        label: estado.nombre,
        value: estado.id_empresa
      }));
    });
  }

  cargarOpcionesPais() {
    this.datos_denunciaService.obtenerOpcionesPais().subscribe((data) => {
      this.opcionesPais = data.map((pais) => ({
        label: pais.nombre,
        value: pais.id_pais
      }));
    });
  }

  cargarOpcionesEstado() {

  }

  onSelectPais() {
    console.log(this.seleccionEmpresa);
    console.log(this.seleccionPais);
  }

  onSelectEstado(estado: number) {
  }


}
