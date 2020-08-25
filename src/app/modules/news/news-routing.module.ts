import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './page/news/news.component';
import { NewsDetailsComponent } from './page/news-details/news-details.component';
const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  { path: 'details/:id', component: NewsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
