import { DataLocalService } from './../../sevrices/data-local.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  slidesOpt = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };
  constructor(public dataLocalService: DataLocalService) {


  }

}
