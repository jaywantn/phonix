import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './page/product/pages.component';
import { TermConditionComponent } from './page/term-condition/term-condition.component';
import {PagesService} from './pages.service';
@NgModule({
  declarations: [PagesComponent, TermConditionComponent],
  imports: [
    PagesRoutingModule
  ],
  providers :[PagesService]
})
export class PagesModule { }
