import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiPaisesService } from 'src/app/servicios/api-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit{

  @Output() pais:EventEmitter<any> = new EventEmitter<any>();

  paises:any[]=[];
  
  constructor(private api:ApiPaisesService) {}

  ngOnInit(): void {
    this.api.obtenerTodos().subscribe((data) => {
      this.paises = data;
    });
  }

  insertarPais(pais:string)
  {
    this.pais.emit(pais);
  }

}
