import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
 // project$: Observable<Project>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
