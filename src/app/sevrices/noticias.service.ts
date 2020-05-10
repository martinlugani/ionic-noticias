import { RespuestaToHeadLine } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';



const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key' : apiKey
});
@Injectable({
  providedIn: 'root'
})
// en este servicio obtengo mis necesidades desde la api
export class NoticiasService {

  constructor(private http: HttpClient) { }

private ejecutaQuery<T>(query: string) {
  console.log(query);
  query = apiUrl + query;
  console.log(query);
  return this.http.get(query, {headers});
}


  getTopHeadLines() {
    // aqui se prepara un consumible para mi app
    // este se lo envia a cualquier modulo de esta
    // a su vez se lo formatea utilizando la interface que creamos en el archivo interfaces.ts
 // return this.http.get<RespuestaToHeadLine>('http://newsapi.org/v2/top-headlines?apiKey=658b31f195e54a3cb247a747369b65ec&country=ar');
  return this.ejecutaQuery<RespuestaToHeadLine>('/top-headlines?country=ar');
}
  getTopHeadLinesCategoria(categoria: string) {
    return this.ejecutaQuery<RespuestaToHeadLine>(`/top-headlines?country=ar&category=${categoria}`);
  }

}
