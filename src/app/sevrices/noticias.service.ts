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

  // paginacion video 102
  // la siguiente variable obtiene en la primera entrada la primera pagina
  headLinesPage = 0;
  // (video 103) implementa infinite scroll por categoria
  categoriasPage = 0;
  categoriaActual = '';


  constructor(private http: HttpClient) { }

private ejecutaQuery<T>(query: string) {
  console.log(query);
  query = apiUrl + query;
  console.log(query);
  return this.http.get<T>(query, {headers});
}


  getTopHeadLines() {
    // incrementa la pagina
    this.headLinesPage++;
    // aqui se prepara un consumible para mi app
    // este se lo envia a cualquier modulo de esta
    // a su vez se lo formatea utilizando la interface que creamos en el archivo interfaces.ts
 // return this.http.get<RespuestaToHeadLine>('http://newsapi.org/v2/top-headlines?apiKey=658b31f195e54a3cb247a747369b65ec&country=ar');
    return this.ejecutaQuery<RespuestaToHeadLine>(`/top-headlines?country=ar&page=${this.headLinesPage}`);
}
  getTopHeadLinesCategoria(categoria: string) {

    // (video 103 ) en este if se controla la categoria para detrminar la carga de pagina de las mismas
    if (categoria===this.categoriaActual) {
      this.categoriasPage++;
    } else {
      this.categoriasPage=1;
      this.categoriaActual=categoria;
    }
    
    return this.ejecutaQuery<RespuestaToHeadLine>(`/top-headlines?country=ar&category=${categoria}&page=${this.categoriasPage}`);
  }

}
