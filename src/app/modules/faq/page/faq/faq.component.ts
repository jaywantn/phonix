import { Component } from '@angular/core';
import { FaqService } from '../../faq.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  details:any;
  faqList :any =[];
  constructor(private faqService: FaqService,
    private meta: Meta,
    private titleService: Title){}
  ngOnInit() {
    this.getDetails();
    this.titleService.setTitle(this.title);
  	this.meta.addTag({name: 'author', content: 'Phonix Lad Developers'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
    this.meta.updateTag({name: 'keywords', content: 'FAQ Phonix Lad Developers'});
    this.meta.updateTag({name: 'description', content: 'FAQ Phonix Lad Developers'}, 'name="description"');


  }
  getDetails() {
    this.faqService.getDetails().subscribe((data: any) => {
      this.details = data;
      this.faqList = data.result;
      console.log(this.faqList);
    });
  }
}
