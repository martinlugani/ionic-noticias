import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//en este servicio obtengo mis necesidades desde la api
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {
    //aqui se prepara un consumible para mi app
    //este se lo envia a cualquier modulo de esta
  return this.http.get('http://newsapi.org/v2/top-headlines?apiKey=658b31f195e54a3cb247a747369b65ec&country=ar');
  }
}
