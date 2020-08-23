import { Component } from '@angular/core';
import { AboutService } from '../../about.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  details:any;
  title = 'About US Phoenix land Developer';
  constructor(private aboutService: AboutService,
    private titleService: Title,
  private meta: Meta){}
  ngOnInit() {
    this.getDetails();
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'About US Phoenix land Developers'});
    this.meta.updateTag({name: 'description', content: 'About US Phoenix land Developers'});
    this.meta.addTag({name: 'author', content: 'PHonix Lad Developers'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }
  getDetails() {
    this.aboutService.getDetails().subscribe((data: any) => { 
      this.details = data;
      console.log(this.details);
    });
  }
}
