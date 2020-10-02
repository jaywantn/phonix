import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   locationList;
   typeList;
   projectList;
   loading;
  constructor(
    private myService: HomeService
  ) { }

  ngOnInit() {
    this.getLocation();
    this.getPropertyType();
    this.getPropertyList();
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

  getPropertyList() {
    this.myService.getPropertyList().subscribe((data: any[]) => {
      data.map((item) => {
        item.img = 'https://www.phoenixdeveloper.in/backend/upload/property/' + item.img;
        return item;
      });
      this.projectList = data;
      console.log('projectList', this.projectList);
    });
  }
}
