import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.css']
})
export class TermConditionComponent implements OnInit {
  termsDetails : any ='';
 //title = 'Contact US Phoenix land Developer';
  constructor(private pagesService: PagesService, private router: Router,
    private titleService: Title,
    private meta: Meta ) { }

  ngOnInit(): void {
    this.getTerms();
  }
  getTerms(): any {
    this.pagesService.getTerm().subscribe((data: any[]) => {
      this.termsDetails = data;
      this.seoGenerate();
      console.log('this.termsDetails', this.termsDetails);
    });
  }
  seoGenerate(){
    this.titleService.setTitle(this.termsDetails.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.termsDetails.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.termsDetails.seo_description}, 'name="description"');
  }
}
