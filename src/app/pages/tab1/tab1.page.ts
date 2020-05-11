import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../sevrices/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// la interface on init permite cargar en la pagina durante el evento del inicio
export class Tab1Page implements OnInit {
  // aqu determino la obtecion de cada articulo para pasarselo a el html
noticias: Article[] = [];



// aqui obtengo el servicio para obtener los valores que obtiene este de la api
  constructor(private noticiasServices: NoticiasService) {}
  ngOnInit() {
   this.cargarNoticias();
  }
  // infinite scroll video 102 permite solicitar el cargado de paginas faltantes
  loadData(event) {
    console.log(event);
    this.cargarNoticias( event);
  }
  // este metodo permite cargar las noticias de la pagina solicitadas
  // event? permite que el argumento que se recibe sea opcional
  cargarNoticias( event?) {

     // aqui se le pide  al servicio que nos de la respuesta y la imprima por consola
     this.noticiasServices.getTopHeadLines()
     .subscribe(resp => {
      // (video 102) el if determina evitar la carga de infinite scroll cada vez que subimos y bajamos la pagina
      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }


      console.log('linea 23 tab1.pages.ts ', resp);

       // en la linea  que sigue lo que se hace es cargar el arreglo
      this.noticias.push(... resp.articles);
     });
     if (event) {
       event.target.complete();
     }
  }

}
