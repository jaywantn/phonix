import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '../../project.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PropertyAllImages, PropertyData} from '../../property';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 5000, noPause: false, showIndicators: true },
    },
  ],
})
export class ProjectDetailsComponent implements OnInit {
 // project$: Observable<Project>;
  projectDetails :any ;
  project : PropertyData;
  propertyAllImages : PropertyAllImages[] ;
  sample:any ;
  constructor(private route: ActivatedRoute, private projectService: ProjectService ) {}
  
  ngOnInit(): void {
  // let pid= this.route.snapshot.paramMap.get("id");
   this.getProjectDetails(this.route.snapshot.paramMap.get("id"));
  }
  getProjectDetails(pid): any {
    this.projectService.getPropertyDetails(pid).subscribe((data: any[]) => {
      // if(data && data.propertyAllImages){
      // data.propertyAllImages.map((item) => {
      //   item.img_name =
      //     'https://www.phoenixdeveloper.in/backend/upload/property/' +
      //     item.img_name;
      //   return item;
      // });
     console.log(data);
     this.projectDetails = data;
      this.propertyAllImages= this.projectDetails.propertyAllImages;
     
      // this.sample.push(this.projectDetails.propertyAllImages);
      // this.sample.push(this.projectDetails.propertyData);
      // console.log(this.sample);
    });
  }
}
