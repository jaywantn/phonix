import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermConditionComponent } from './page/term-condition/term-condition.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { PagesComponent } from './page/product/pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'term-condition', component: TermConditionComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
