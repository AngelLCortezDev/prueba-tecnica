import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgIf } from '@angular/common';
import { Route } from '@angular/router';

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

  seguimiento() {
    console.log(this.folio);
    console.log(this.password);
    this.folio ='';
    this.password='';
  }

  registro() {
    
  }

}
