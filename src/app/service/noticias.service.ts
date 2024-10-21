import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from '../interfaces/articulos';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private peticion: HttpClient) { }
  obtenerNoticias(){
    return this.peticion.get<Welcome>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aa618d7aeb9f49be926b7b6fa06923ae')
  }
}
