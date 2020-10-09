import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { LoadingService } from 'src/app/core/service/loading.service';
import { HomeService } from 'src/app/modules/home/home.service';
import { ProjectService } from '../../project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  constructor(
    private myService: HomeService,
    private router: Router,
    private loaderService: LoadingService,
    private projectService: ProjectService,
    public appConstants: AppConstants ) {}

  projectList: any[] = [];
  locationList: any;

  ngOnInit() {
    this.getPropertyList();
  }
  getProjectDetails(pid): any {
    this.router.navigate(['/project/details/', pid] );
  }
  getPropertyList(): void {
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
        this.projectList = data;
        this.loaderService.hideLoader();
      });
    });
  }
}
