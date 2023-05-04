import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {

  paisInsertado:string = "";
  nuevoActor:Actor = {};

  constructor(private fs:FirestoreService) {}

  obtenerPais($event:string)
  {
    this.paisInsertado = $event;
    this.nuevoActor.pais = this.paisInsertado;
  }

  guardar()
  {
    this.fs.guardarActor(this.nuevoActor);
  }
}
