import { Component } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  policyDetails:any ='';
  constructor(private pagesService: PagesService, private router: Router ) { }
  ngOnInit(): void {
    this.getPolicy();
  }
  getPolicy(): any {
    this.pagesService.getPolicy().subscribe((data: any[]) => {
      this.policyDetails = data;
      // console.log('this.policyDetails', this.policyDetails);
    });
  }
}
