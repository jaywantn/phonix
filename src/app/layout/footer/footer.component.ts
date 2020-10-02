import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  generalData: any[] = JSON.parse(sessionStorage.getItem('generalDetails'));
  currentYear = new Date().getUTCFullYear();
  phoneNumber;
  facebook;
  youtube;
  google;
  linkedIn;
  extraNo;
  ngOnInit() {
    this.phoneNumber = this.generalData[6]['description'];
    this.facebook = this.generalData[0]['description'];
    this.youtube = this.generalData[3]['description'];
    this.google = this.generalData[5]['description'];
    this.linkedIn = this.generalData[2]['description'];
    this.extraNo = this.generalData[2]['10'];
  }
}
