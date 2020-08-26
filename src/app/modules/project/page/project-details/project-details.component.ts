import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
export class ProjectDetailsComponent implements OnInit,AfterViewInit {
 // project$: Observable<Project>;
  projectDetails :any ;
  project : PropertyData;
  // google map parameter
  zoom = 12;
  center: google.maps.LatLngLiteral;
  generalData = JSON.parse(sessionStorage.getItem('generalDetails'));
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  propertyAllImages : PropertyAllImages[] =[] ;
  sample:any ;
  constructor(private route: ActivatedRoute, private projectService: ProjectService ) {}
  
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 18.5204,
        lng: 73.8567,
      };
    });
  // let pid= this.route.snapshot.paramMap.get("id");
   this.getProjectDetails(this.route.snapshot.paramMap.get("id"));
  }
  ngAfterViewInit(){
   // this.simple.nativeElement.innerHTML =  '<p>Internal Roads - WBM</p>↵↵<p>Provision for Electricity</p>↵↵<p>Provision for Water</p> ';
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
      this.project = this.projectDetails.propertyData;
      this.propertyAllImages= this.projectDetails.propertyAllImages;   
    });
    
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
}
