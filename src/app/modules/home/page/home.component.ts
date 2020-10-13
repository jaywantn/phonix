import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { ConfigService } from 'src/app/config.service';
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
  searchForm: FormGroup;
  submitted = false;

  constructor(
    private myService: HomeService,
    private formBuilder: FormBuilder,
    private loaderService: LoadingService,
    public appConstants: AppConstants,
    public configService: ConfigService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBanner();
    this.getLocation();
    this.getPropertyType();
    this.getPropertyList();

    this.searchForm = this.formBuilder.group({
      location: [''],
      propertyType: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.configService.setPropertyToDisplay(this.searchForm.value);
    this.router.navigate(['/project']);
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
