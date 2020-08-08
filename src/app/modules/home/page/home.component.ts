import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { NgbModal } from './ng-bootstrap/ng-bootstrap';

import { MyModalComponent } from '../modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   // projects$: Observable<Project[]> = this.projectService.getAll();

  constructor(
    
  ) {}

  ngOnInit(): void {}


}
