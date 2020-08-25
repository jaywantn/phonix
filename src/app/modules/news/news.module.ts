import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './page/news/news.component';
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './page/news-details/news-details.component';

@NgModule({
  declarations: [NewsComponent, NewsDetailsComponent],
  imports: [
    NewsRoutingModule,CommonModule
  ],
  providers: [NewsService],
})
export class NewsModule { }
