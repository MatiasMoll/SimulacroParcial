import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  public peliculaNueva:Pelicula;
  @Output() eventoCreacionNuevaPelicula:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    this.eventoCreacionNuevaPelicula.emit(this.peliculaNueva);
    console.log(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
  }
}
