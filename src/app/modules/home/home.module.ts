import { NgModule } from '@angular/core';
// import { NgxMasonryModule } from 'ngx-masonry';
// import { SharedModule } from '@shared/shared.module';

import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
// import { ProjectDetailsComponent } from './page/project-details/project-details.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    MyModalComponent
  ],
  imports: [ HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
