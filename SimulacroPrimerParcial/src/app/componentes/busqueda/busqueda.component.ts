import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ApiPaisesService } from 'src/app/servicios/api-paises.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  peliculasBusqueda:any[] = [];
  peliculaDetallada:Pelicula={};
  vista:string = "tabla";

  constructor()
  {
    this.peliculasBusqueda = [
      {id:1,
        nombre:"Harry Potter y la piedra filosofal", 
        tipo:"Fantasia",
        fechaDeEstreno:"26-06-1997",
        cantidadDePublico:20000000,
        fotoDeLaPelicula:"/imagenes/HarryPotter"},
      {id:2,
        nombre:"Rápidos y furiosos 10",
        tipo:"Acción",
        fechaDeEstreno:"22-02-2000",
        cantidadDePublico:3000000,
        fotoDeLaPelicula:"/imagenes/RapidosYFuriosos"},
      {id:3,
        nombre:"Loco por Mary",
        tipo:"Comedia",
        fechaDeEstreno:"01-01-1999",
        cantidadDePublico:20000000,
        fotoDeLaPelicula:"/imagenes/LocoPorMary"}
    ];
  }

  mostrarDetallesBusqueda($event:Pelicula)
  {
    this.peliculaDetallada = $event;
  }

  cambiarVista()
  {
    if(this.vista == "tabla")
    {
      this.vista = "listado";
    }
    else
    {
      this.vista = "tabla";
    }
  }
}
