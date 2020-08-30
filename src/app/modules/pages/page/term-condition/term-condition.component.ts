import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.css']
})
export class TermConditionComponent implements OnInit {
  termsDetails : any ='';
  constructor(private pagesService: PagesService, private router: Router ) { }

  ngOnInit(): void {
    this.getTerms();
  }
  getTerms(): any {
    this.pagesService.getTerm().subscribe((data: any[]) => {
      this.termsDetails = data;
      console.log('this.termsDetails', this.termsDetails);
    });
  }
}
