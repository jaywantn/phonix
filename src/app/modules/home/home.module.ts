import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    MyModalComponent
  ],
  imports: [ CommonModule, HomeRoutingModule, [CarouselModule.forRoot()]],
  exports: [],
  providers: [HomeService],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
