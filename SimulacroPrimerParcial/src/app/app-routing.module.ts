import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';

const routes: Routes = [
  {path: "", component:BusquedaComponent},
  {path: "busqueda", component:BusquedaComponent},
  {path: "peliculaAlta", component:PeliculaAltaComponent},
  {path: "actorAlta", component:ActorAltaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
