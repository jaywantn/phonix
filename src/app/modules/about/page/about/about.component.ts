import { Component, Renderer2, OnInit } from '@angular/core';
import { AboutService } from '../../about.service';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  details: any;
  constructor(
    private aboutService: AboutService,
    private renderer: Renderer2,
    private titleService: Title,
    private meta: Meta){}

  ngOnInit(): void {
    this.getDetails();
    this.meta.updateTag({name: 'keywords', content: 'About US Phoenix land Developers'});
    this.meta.updateTag({name: 'description', content: 'About US Phoenix land Developers'});
    this.meta.addTag({name: 'author', content: 'PHonix Lad Developers'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

  getDetails(): void {
    this.aboutService.getDetails().subscribe((data: any) => {
      this.details = data;
      console.log(this.details);
    });
  }

}
