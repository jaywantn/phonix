import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
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

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private meta: Meta) {}


  ngOnInit(): void {
    this.meta.addTag({name: 'author', content: 'Phonix Lad Developers'});
    this.meta.addTag({name: 'robots', content: 'index, follow'});
    if (this.generalData) {
      this.phoneNumber = this.generalData[5].description;
    }

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile_no: ['', [ Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', Validators.required]
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

  onSubmit(): Observable<any> {
    this.submitted = true;
     // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }
    this.contactService.sendPostRequest(this.contactForm.value).subscribe(
      res => {
        if (res === 'success'){
          this.submitted = false;
          this.formStatus = true;
        }
        console.log(res);
      }
    );
    this.contactForm.reset();
  }

  getDetails(): void {
    this.contactService.getBanner().subscribe((data: any) => {
      this.details = data;
      console.log(this.details);
      this.seoGenerate();
    });
  }
  zoomIn(): void {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut(): void {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }
  seoGenerate(): void {
    this.titleService.setTitle(this.details.seo_title);
    this.meta.updateTag({name: 'keywords', content: this.details.seo_keyword});
    this.meta.updateTag({name: 'description', content: this.details.seo_description}, 'name="description"');
  }
}
