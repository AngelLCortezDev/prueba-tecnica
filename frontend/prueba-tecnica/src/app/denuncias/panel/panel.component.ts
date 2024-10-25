import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';
import { DenunciaService } from '../../core/services/denuncia/denuncia.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  folio: string = '';
  password: string = '';
  respuesta: any;

  constructor(private router: Router, private denuncia: DenunciaService){
  }

  seguimiento() {
    this.denuncia.obtenerDenuncia({
      folio: this.folio,
      password: this.password
    }).subscribe((data) => {
      this.respuesta = data
    });
    const id = this.respuesta.detalle_denuncia;
    const folio = this.folio;
    this.router.navigate(['/denuncias/seguimiento'],{
      queryParams: { id, folio }
    });
  }

  registro() {
    this.router.navigate(['/denuncias']);
  }

}
