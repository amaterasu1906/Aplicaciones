import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormatMonedaPipe } from './format-moneda.pipe';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { AddUsersComponent } from './usuarios/add-users/add-users.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    BoostrapComponent,
    PipesComponent,
    FormatMonedaPipe,
    Error404Component,
    HeaderComponent,
    UsuariosComponent,
    EditUsersComponent,
    AddUsersComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
