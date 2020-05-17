import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../sevrices/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  @Input()indice: number;
  @Input()enNoticias;
  constructor(private iab: InAppBrowser,
              private actionSheet: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLOcalSercice: DataLocalService) { }

  ngOnInit() {}
  abrirNoticia() {
    console.log();
    const browser = this.iab.create(this.noticia.url, '_system');
  }
 async lanzarMenu() {

    let guardarBorrarBtn;
    if (this.enNoticias) {
      guardarBorrarBtn=
      {
        text: 'Eliminar de favoritos',
        icon: 'trash-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.dataLOcalSercice.borrarNoticia(this.noticia);
        
      },
    };
    } else {
      guardarBorrarBtn=
        {
          text: 'Favorito',
          icon: 'heart',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorito');
            this.dataLOcalSercice.guardarNoticias(this.noticia);
          
        },
      };
    }




    const actionSheet = await this.actionSheet.create({
      header: 'Opciones',
      cssClass: 'action-dark',
      buttons: [
        guardarBorrarBtn,
        {
        text: 'Compartir',
        role: 'destructive',
        icon: 'share-social-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Delete clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
