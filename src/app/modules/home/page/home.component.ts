import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
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

  constructor(private myService: HomeService, public appConstants: AppConstants) { }

  ngOnInit(): void {
    this.getBanner();
    this.getLocation();
    this.getPropertyType();
    this.getPropertyList();
  }
  getLocation(): void {
    this.myService.getLocation().subscribe((data: any[]) => {
      this.locationList = data;
    });
  }
  getPropertyType(): void {
    this.myService.getPropertyType().subscribe((data: any[]) => {
      console.log(data);
      this.typeList = data;
    });
  }

  getPropertyList(): void {
    this.myService.getPropertyList().subscribe((data: any[]) => {
      data.map((item) => {
        item.img = this.appConstants.bannerURL + 'property/' + item.img;
        return item;
      });
      this.projectList = data;
    });
  }

  getBanner(): void {
    this.myService.getBanner().subscribe((data: any[]) => {
      data.map((item) => {
        item.banner_image = this.appConstants.bannerURL + 'banner/' + item.banner_image;
        return item;
      });
      this.banner = data;
    });
  }
}
