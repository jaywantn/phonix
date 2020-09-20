import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './page/product/pages.component';
import { TermConditionComponent } from './page/term-condition/term-condition.component';
import {PagesService} from './pages.service';
import { GalleryComponent } from './page/gallery/gallery.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
@NgModule({
  declarations: [PagesComponent, TermConditionComponent, GalleryComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    GalleryModule,
    LightboxModule
  ],
  providers :[PagesService]
})
export class PagesModule { }
