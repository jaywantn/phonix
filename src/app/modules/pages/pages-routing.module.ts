import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './page/product/pages.component';
import { TermConditionComponent } from './page/term-condition/term-condition.component';

const routes: Routes = [

  { path: '', component: PagesComponent },
  { path: 'term-condition', component: TermConditionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
