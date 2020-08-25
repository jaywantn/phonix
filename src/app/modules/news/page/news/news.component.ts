import { Component } from '@angular/core';
import { NewsService } from '../../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  details:any;
  newList =[]
  constructor(private newsService: NewsService){}
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.newsService.getList().subscribe((data: any) => { 
      data.map((item) => {
        item.image =
          'https://www.phoenixdeveloper.in/backend/upload/news/' +
          item.image;
        return item;
      });
      this.newList = data;
      console.log(this.newList);
    });
  }
}
