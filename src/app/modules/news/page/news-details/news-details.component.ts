import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { LoadingService } from 'src/app/core/service/loading.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any;
  newList = [];
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private loaderService: LoadingService,
    public appConstants: AppConstants) { }

  ngOnInit(): void {
    this.getNewsDetails(this.route.snapshot.paramMap.get('id'));
    this.getList();
  }

  getNewsDetails(nid): any {
    this.loaderService.showLoader();
    this.newsService.getDetails(nid).subscribe((data: any[]) => {
      this.newsDetails = data;
      this.loaderService.hideLoader();
    });
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
