import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DatosDenunciaService } from '../../core/services/datos_denuncia/datos-denuncia.service';
import { DD_Item } from '../../core/interfaces/dropdown-item';
import * as bcrypt from 'bcryptjs';
import { DenunciaService } from '../../core/services/denuncia/denuncia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule, ScrollPanelModule, ButtonModule, CheckboxModule, InputTextareaModule, FloatLabelModule, CalendarModule, DialogModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  formularioDenuncia: FormGroup;

  opcionesEmpresa: DD_Item[] = [];
  opcionesPais: DD_Item[] = [];
  opcionesEstado: DD_Item[] = [];

  //Password
  hashedPassword:string = "";

  //Contacto
  anonimoIsChecked: boolean = false;

  //Modal exito
  displaySuccess = false;
  //Modal falla
  displayError = false;

  constructor(private datos_denunciaService: DatosDenunciaService, private fb: FormBuilder, private denunciaService: DenunciaService, private router: Router) {
    //Inicializar interfaz denuncia en modo formulario
    this.formularioDenuncia = this.fb.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      datos_denuncia:this.fb.group({
        empresa:[null,Validators.required],
        pais:[null,Validators.required],
        estado:[null,Validators.required],
        num_centro:[null,Validators.required]
      }),
      denunciante:this.fb.group({
        nombre:['',Validators.required],
        correo:['',[Validators.required, Validators.email]],
        telefono:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]]
      }),
      detalle_denuncia:this.fb.group({
        descripcion:['',Validators.required],
        fecha:['',Validators.required],
      })
    });
  }

  ngOnInit() {
    this.cargarOpcionesEmpresa();
    this.cargarOpcionesPais();
  }

  cargarOpcionesEmpresa() {
    this.datos_denunciaService.obtenerOpcionesEmpresa().subscribe((data) => {
      this.opcionesEmpresa = data.map((empresa) => ({
        label: empresa.nombre,
        value: empresa.id_empresa
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

  onSelectPais(pais: DD_Item){
    this.cargarOpcionesEstado(pais.value);
  }

  irAInicio(){
    this.router.navigate(['/panel']);
  }

  //En caso de habilitar o deshabilitar el check de Anonimo, agregar o deshabilitar las validaciones a los campos correspondientes 
  onCheckboxAnonimoChange(event: any){
    console.log(event.checked);
    this.anonimoIsChecked = event.checked;
    const nombreControl = this.formularioDenuncia.get('denunciante.nombre');
    const correoControl = this.formularioDenuncia.get('denunciante.correo');
    const telefonoControl = this.formularioDenuncia.get('denunciante.telefono');
    if(this.anonimoIsChecked){
      nombreControl?.clearValidators();
      correoControl?.clearValidators();
      telefonoControl?.clearValidators();
    }else{
      nombreControl?.setValidators(Validators.required);
      correoControl?.setValidators([Validators.required, Validators.email]);
      telefonoControl?.setValidators([Validators.required, Validators.minLength(10),Validators.maxLength(10)]);
    }
    nombreControl?.updateValueAndValidity();
    correoControl?.updateValueAndValidity();
    telefonoControl?.updateValueAndValidity();
  }

  encriptarPassword(password: string){
    const saltRounds = 10;
    this.hashedPassword = bcrypt.hashSync(password, saltRounds);

  }

  generarFolio(){
    const numero = Math.floor(10000 + Math.random() * 90000)
    const folio = numero.toString();
    return folio
  }

  normalizarDenuncia(denuncia: any){
    //Encriptar la contraseña
    this.encriptarPassword(denuncia.password);
    //Generar un folio de 5 digitos y agregarlo al objeto denuncia
    denuncia.folio = this.generarFolio();
    //Agregar la contraseña encriptada al objeto denuncia
    denuncia.password = this.hashedPassword;
    //Si es anonimo agregar el id del denunciante anonimo(1)
    if(this.anonimoIsChecked){
      denuncia.denunciante.id_denunciante = 1;
    }
    //Inicializar el status en 1 -> Abierto
    denuncia.detalle_denuncia.status = 1;

    //Dar el formato correcto a la hora
    const fecha = new Date(denuncia.detalle_denuncia.fecha);
    denuncia.detalle_denuncia.fecha = fecha.toISOString().split("T")[0];

    //Agregar las llaves foraneas a los campos de datos_denuncia
    denuncia.datos_denuncia.empresa = denuncia.datos_denuncia.empresa.value
    denuncia.datos_denuncia.pais = denuncia.datos_denuncia.pais.value
    denuncia.datos_denuncia.estado = denuncia.datos_denuncia.estado.value

    return JSON.stringify(denuncia);
  }

  onSubmit(){
    if(this.formularioDenuncia.valid){
      const denuncia = this.normalizarDenuncia(this.formularioDenuncia.value);
      console.log(denuncia)
      this.denunciaService.crearDenuncia(denuncia);
      this.displaySuccess = true;

    }else{
      this.displayError = true;
    }
  }
}
