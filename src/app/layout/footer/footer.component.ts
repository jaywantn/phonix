import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { ConfigService } from 'src/app/config.service';
import { LoadingService } from 'src/app/core/service/loading.service';
import { HomeService } from 'src/app/modules/home/home.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  generalData: any[] = JSON.parse(sessionStorage.getItem('generalDetails'));
  currentYear = new Date().getUTCFullYear();
  phoneNumber;
  facebook;
  youtube;
  google;
  linkedIn;
  extraNo;
  footerPropertyData;
  constructor(
    private configService: ConfigService,
    private loaderService: LoadingService,
    private myService: HomeService,
    public appConstants: AppConstants) { }

  ngOnInit(): void {
    if (this.generalData) {
      this.facebook = this.generalData[0].description;
      this.google = this.generalData[5].description;
      this.phoneNumber = this.generalData[6].description;
      this.youtube = this.generalData[3].description;
      this.linkedIn = this.generalData[2].description;
      this.extraNo = this.generalData[9].description;
    }

    this.configService.footerPropperty().subscribe((data: any[]) => {
      data.map((item) => {
        item.img = this.appConstants.bannerURL + 'property/' + item.img;
        item.min_price = this.numDifferentiation(item.min_price);
        item.max_price = this.numDifferentiation(item.max_price);
        return item;
      });
      this.footerPropertyData = data;
    });
  }

  public numDifferentiation(value): any {
    let val: any = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Cr*';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lacs*';
    }
    return val;
  }
}
