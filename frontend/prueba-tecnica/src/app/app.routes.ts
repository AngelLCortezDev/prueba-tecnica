import { Routes } from '@angular/router';
import { PanelComponent } from './denuncias/panel/panel.component';
import { RegistroComponent } from './denuncias/registro/registro.component';
import { SeguimientoComponent } from './denuncias/seguimiento/seguimiento.component';

export const routes: Routes = [
    {path: '', redirectTo: '/panel', pathMatch: 'full'},
    {path: 'panel', component: PanelComponent},
    {path: 'denuncias', component: RegistroComponent},
    {path: 'denuncias/seguimiento', component: SeguimientoComponent}
];
