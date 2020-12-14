import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { Error404Component } from './error404/error404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AddUsersComponent } from './usuarios/add-users/add-users.component';
import { EditUsersComponent } from './usuarios/edit-users/edit-users.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {    path:'', component: TitulosComponent  },
  {    path:'pipes', component: PipesComponent  },
  {    path:'boostrap', component: BoostrapComponent  },
  {    path:'directivas', component: DirectivaComponent  },
  {    path:'usuarios', component: UsuariosComponent, children:[
      {   path:"agregar", component: AddUsersComponent      },
      {   path:"editar", component: EditUsersComponent      }
    ]
  },
  {    path:"articulos", component: ArticuloComponent},
  {    path:"articuloDetalle", component: ArticuloDetalleComponent},
  {    path:'**', component: Error404Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
