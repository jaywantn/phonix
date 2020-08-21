import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  details: any;
  zoom = 12;
  formStatus = false;
  center: google.maps.LatLngLiteral;
  phoneNumber;
  generalData = JSON.parse(sessionStorage.getItem('generalDetails'));
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  contactForm :FormGroup;
  submitted = false;
  constructor(private contactService: ContactService,
    private formBuilder: FormBuilder) {}
  

  ngOnInit() {
    this.phoneNumber = this.generalData[5]['description'];  
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 18.5204,
        lng: 73.8567,
      };
    });
    this.getDetails();
  }
   // convenience getter for easy access to form fields
   get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
     // stop here if form is invalid
     if (this.contactForm.invalid) {
        return;
    }
    console.log(this.contactForm.value);
    this.contactService.sendPostRequest(this.contactForm.value).subscribe(
      res => {
        if(res == 'success'){
          this.formStatus =true
        }
        console.log(res);
      }
    );
    this.contactForm.reset();
  }

  getDetails() {
    this.contactService.getBanner().subscribe((data: any) => {
      this.details = data;
      console.log(this.details);
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
}
