import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DatosDenunciaService } from '../../core/services/datos-denuncia.service';
import { DD_Item } from '../../core/interfaces/dropdown-item';

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

  seleccionEmpresa = 0;
  seleccionPais = 0;
  seleccionEstado = 0;

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

  cargarOpcionesEstado(pais: number) {
    this.datos_denunciaService.obtenerOpcionesEstado(pais).subscribe((data) => {
      this.opcionesEstado = data.map((estado) => ({
        label: estado.nombre,
        value: estado.id_estado
      }));
    });
  }

  onSelectPais(pais: DD_Item) {
    this.cargarOpcionesEstado(pais['value']);
  }



}
