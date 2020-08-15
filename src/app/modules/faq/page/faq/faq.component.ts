import { Component } from '@angular/core';
import { FaqService } from '../../faq.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  details:any;
  constructor(private faqService: FaqService){}
  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.faqService.getDetails().subscribe((data: any) => { 
      this.details = data;
      console.log(this.details);
    });
  }
}
