import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  private paises = "https://restcountries.com/v3.1/all";

  constructor(private http:HttpClient) {}

  obtenerTodos()
  {
    return this.http.get<any>(this.paises);
  }
}
