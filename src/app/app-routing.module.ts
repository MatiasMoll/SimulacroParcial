import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  {path:'',redirectTo:'busqueda',pathMatch:'full'},
  {path:'bienvenido',component:BienvenidosComponent},
  {path:'busqueda',component:BusquedaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
