import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { LoadingService } from 'src/app/core/service/loading.service';
import { NewsService } from '../../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  details: any;
  newList: any = [];
  constructor(
    private newsService: NewsService,
    private loaderService: LoadingService,
    public appConstants: AppConstants
  ){}
  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    this.loaderService.showLoader();
    this.newsService.getList().subscribe((data: any) => {
      data.map((item) => {
        item.image = this.appConstants.bannerURL + 'news/' + item.image;
        return item;
      });
      this.newList = data;
      this.loaderService.hideLoader();
    });
  }
}
