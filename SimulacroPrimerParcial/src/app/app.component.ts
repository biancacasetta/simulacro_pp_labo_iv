import { Component, OnInit } from '@angular/core';
import { ApiPaisesService } from './servicios/api-paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bianca Casetta - Simulacro de Parcial';

  constructor(private api:ApiPaisesService) {}

  ngOnInit(): void {
    //this.api.obtenerTodos().subscribe(res => console.log(res));
  }
}
