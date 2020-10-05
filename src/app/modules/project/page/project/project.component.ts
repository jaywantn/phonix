import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private projectService: ProjectService ) {}

  projectList: any[] = [];

  ngOnInit() {
    this.getPropertyList();
  }
  getProjectDetails(pid): any {
    this.router.navigate(['/project/details/', pid] );
  }
  getPropertyList() {
    this.projectService.getPropertyList().subscribe((data: any[]) => {
      data.map((item) => {
        item.img =
          '//phoenixdeveloper.in/backend/upload/property/' +
          item.img;
        return item;
      });
      this.projectList = data;
    });
  }
}
