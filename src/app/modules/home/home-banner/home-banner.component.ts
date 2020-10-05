import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styles: [],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 5000, noPause: false, showIndicators: true },
    },
  ],
})
export class HomeBannerComponent implements OnInit {
  banner: any = [];

  constructor( private myService: HomeService ) {}

  ngOnInit() {

  }


}
