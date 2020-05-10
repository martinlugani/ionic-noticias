import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../sevrices/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// la interface on init permite cargar en la pagina durante el evento del inicio
export class Tab1Page implements OnInit {
// aqui obtengo el servicio para obtener los valores que obtiene este de la api
  constructor(private noticiasServices: NoticiasService) {}
  ngOnInit() {
    // aqui se le pide  al servicio que nos de la respuesta y la imprima por consola
    this.noticiasServices.getTopHeadLines()
    .subscribe(resp => {
      console.log('noticias', resp);
    });
  }

}
