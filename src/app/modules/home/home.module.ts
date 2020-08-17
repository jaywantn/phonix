import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
  //  MyModalComponent
  ],
  imports: [ CommonModule, HomeRoutingModule, [CarouselModule.forRoot()], ModalModule.forRoot()],
  exports: [],
  providers: [HomeService],
  entryComponents: []
})
export class HomeModule {}
