import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';
import { AnimacionComponent } from './Componentes/animacion/animacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    InicioComponent,
    NotFoundComponent,
    AnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
