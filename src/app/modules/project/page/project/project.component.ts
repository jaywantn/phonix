import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { ConfigService } from 'src/app/config.service';
import { LoadingService } from 'src/app/core/service/loading.service';
import { HomeService } from 'src/app/modules/home/home.service';
import { ProjectService } from '../../project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  searchPropertyData: any;
  constructor(
    private myService: HomeService,
    private router: Router,
    private loaderService: LoadingService,
    private projectService: ProjectService,
    public appConstants: AppConstants,
    public configService: ConfigService ) {}

  projectList: any[] = [];
  locationList: any;

  ngOnInit(): void {
    this.getValueFromHomePage();
  }

  getValueFromHomePage(): any {
    this.configService.currentUser.subscribe(propertyData => {
      this.searchPropertyData = propertyData;
      this.getPropertyList(this.searchPropertyData);
    }, err => {
      console.log(err);
    });
  }

  getProjectDetails(pid): any {
    this.router.navigate(['/project/details/', pid] );
  }

  getPropertyList(dataValue): void {
    this.loaderService.showLoader();
    this.projectService.getPropertyList().subscribe((data: any[]) => {
      this.loaderService.showLoader();
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
        if(dataValue === 0) {
          this.projectList = data;
        } else {
          data.map(item => {
            if(dataValue.location === item.plocationdistrict || dataValue.propertyType === item.pt_name) {
              this.projectList = [];
              this.projectList.push(item);
            }
            console.log(item.plocationdistrict);
            console.log(item.pt_name);
            console.log(dataValue.location);
            console.log(dataValue.propertyType);
          })
        }
        this.loaderService.hideLoader();
      });
    });
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }
}
