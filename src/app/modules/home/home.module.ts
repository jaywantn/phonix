import { NgModule } from '@angular/core';
// import { NgxMasonryModule } from 'ngx-masonry';
// import { SharedModule } from '@shared/shared.module';

import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
// import { ProjectDetailsComponent } from './page/project-details/project-details.component';

import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    MyModalComponent
  ],
  imports: [ HomeRoutingModule],
  exports: [],
  providers: [HomeService],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
