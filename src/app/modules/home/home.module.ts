import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './page/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    [CarouselModule.forRoot()]
  ],
  exports: [],
  providers: [HomeService],
  entryComponents: []
})
export class HomeModule {}
