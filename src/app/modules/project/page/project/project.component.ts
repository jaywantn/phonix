import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  projectList: any[] = [
    {
      name: 'Douglas  Pace'
    },
    {
      name: 'Mcleod  Mueller'
    },
    {
      name: 'Day  Meyers'
    },
    {
      name: 'Aguirre  Ellis'
    },
    {
      name: 'Cook  Tyson'
    }
  ];

  ngOnInit(): void {
  }
  getProjectDetails(): any {
    this.router.navigate(['/project/details/2']);
  }
}
