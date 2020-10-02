import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
  contactForm: FormGroup;
  submitted = false;
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private meta: Meta) {}


  ngOnInit() {
    this.meta.addTag({name: 'author', content: 'Phonix Lad Developers'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});

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
        if(res === 'success'){
          this.submitted = false;
          this.formStatus = true;
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
      this.seoGenerate();
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }
  seoGenerate(){
    this.titleService.setTitle(this.details.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.details.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.details.seo_description}, 'name="description"');
  }
}
