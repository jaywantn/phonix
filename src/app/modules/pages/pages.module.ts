import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './page/product/pages.component';
import { TermConditionComponent } from './page/term-condition/term-condition.component';
import {PagesService} from './pages.service';
import { GalleryComponent } from './page/gallery/gallery.component';
@NgModule({
  declarations: [PagesComponent, TermConditionComponent, GalleryComponent],
  imports: [
    PagesRoutingModule
  ],
  providers :[PagesService]
})
export class PagesModule { }
