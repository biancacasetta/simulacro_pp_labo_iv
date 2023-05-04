import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input()peliculas?:Pelicula[];
  @Output() mostrarDetallesTabla:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  obtenerDetalles(peli:Pelicula)
  {
    this.mostrarDetallesTabla.emit(peli);
  }
}
