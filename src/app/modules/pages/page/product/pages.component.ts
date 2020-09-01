import { Component } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  policyDetails:any ='';
  constructor(private pagesService: PagesService, private router: Router,
    private titleService: Title,
    private meta: Meta  ) { }
  ngOnInit(): void {
    this.getPolicy();
  }
  getPolicy(): any {
    this.pagesService.getPolicy().subscribe((data: any[]) => {
      this.policyDetails = data;
      // console.log('this.policyDetails', this.policyDetails);
      this.seoGenerate();
    });
  }
  seoGenerate(){
    this.titleService.setTitle(this.policyDetails.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.policyDetails.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.policyDetails.seo_description}, 'name="description"');
  }
}
