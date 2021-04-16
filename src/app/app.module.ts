import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPeliculaComponent,
    BienvenidosComponent,
    NavBarComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent
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
