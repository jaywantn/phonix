import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
declare var tjq: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   // projects$: Observable<Project[]> = this.projectService.getAll();
   locationList;
   typeList;
  constructor(
    private myService: HomeService
  ) {
  }

  ngOnInit() {
    this.getLocation();
    this.getPropertyType();
  }
  getLocation() {
    this.myService.getLocation().subscribe((data: any[]) => {
      this.locationList = data;
    });
  }
  getPropertyType() {
    this.myService.getPropertyType().subscribe((data: any[]) => {
     console.log(data);
      this.typeList = data;
    });
  }
}
