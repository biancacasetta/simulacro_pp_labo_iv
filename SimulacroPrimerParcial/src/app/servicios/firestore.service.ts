import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fs:Firestore) { }

  guardarActor(actor:Actor)
  {
    const actores = collection(this.fs, "actores");
    return addDoc(actores,{
      nombre:actor.nombre,
      apellido:actor.apellido,
      genero:actor.genero,
      edad:actor.edad,
      pais:actor.pais,
      foto:actor.foto
    });
  }
}
