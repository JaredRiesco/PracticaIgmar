import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';

const routes: Routes = [
  {​​path: '', component: NavbarComponent}​​,
  {path: 'Formulario', component: FormularioComponent},
  {path: '**', component: NotFoundComponent},
  {path: 'Inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
