import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  @Input()peliculas?:Pelicula[];
  @Output() mostrarDetallesListado:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  obtenerDetalles(peli:Pelicula)
  {
    this.mostrarDetallesListado.emit(peli);
  }
}
