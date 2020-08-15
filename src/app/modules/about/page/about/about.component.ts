import { Component } from '@angular/core';
import { AboutService } from '../../about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  details:any;
  constructor(private aboutService: AboutService){}
  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.aboutService.getDetails().subscribe((data: any) => { 
      this.details = data;
      console.log(this.details);
    });
  }
}
