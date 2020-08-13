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
   banner;
  constructor(
    private myService: HomeService
  ) {
  }

  ngOnInit() {

  }

}
