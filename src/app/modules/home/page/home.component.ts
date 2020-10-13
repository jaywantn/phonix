import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { LoadingService } from 'src/app/core/service/loading.service';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  banner: any = [];
  locationList: any;
  typeList: any;
  projectList: any;
  loading: any;

  constructor(private myService: HomeService, private loaderService: LoadingService, public appConstants: AppConstants) { }

  ngOnInit(): void {
    this.getBanner();
    this.getLocation();
    this.getPropertyType();
    this.getPropertyList();
  }
  getLocation(): void {
    this.loaderService.showLoader();
    this.myService.getLocation().subscribe((data: any[]) => {
      this.locationList = data;
      this.loaderService.hideLoader();
    });
  }
  getPropertyType(): void {
    this.loaderService.showLoader();
    this.myService.getPropertyType().subscribe((data: any[]) => {
      this.typeList = data;
      this.loaderService.hideLoader();
    });
  }

  getPropertyList(): void {
    this.loaderService.showLoader();
    this.myService.getPropertyList().subscribe((data: any[]) => {
      this.myService.getLocation().subscribe((dataList: any[]) => {
        this.locationList = dataList;
        data.map((item) => {
          this.locationList.forEach(element => {
            if (element.lc_id === item.plocationdistrict) {
              item.plocationdistrict = element.lc_name;
            }
          });
          item.img = this.appConstants.bannerURL + 'property/' + item.img;
          return item;
        });
        this.projectList = data;
        this.loaderService.hideLoader();
      });
    });
  }

  getBanner(): void {
    this.myService.getBanner().subscribe((data: any[]) => {
      data.map((item) => {
        item.banner_image = this.appConstants.bannerURL + 'banner/' + item.banner_image;
        item.mobile_banner_image = this.appConstants.bannerURL + 'banner/' + item.mobile_banner_image;
        return item;
      });
      this.banner = data;
    });
  }
}
