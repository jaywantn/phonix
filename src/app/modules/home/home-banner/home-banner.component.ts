import { Component, OnInit, TemplateRef, ElementRef, ViewChild  } from '@angular/core';
import { HomeService } from '../home.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
declare var tjq: any;
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styles: [],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: false, showIndicators: true } }
  ]
})
export class HomeBannerComponent implements OnInit {
  modalRef: BsModalRef;
  banner: any = [];
  @ViewChild('template') modalTemplate : TemplateRef<any>;
  contactForm :FormGroup;
  submitted = false;

  constructor(private myService: HomeService, private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBanner();
       
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });

  }
  ngAfterViewInit() {
    setTimeout(() => {this.openModal(this.modalTemplate)}, 2000);
  }

  getBanner() {
    this.myService.getBanner().subscribe((data: any[]) => {
      data.map(item => {
        item.banner_image = 'https://www.phoenixdeveloper.in/backend/upload/banner/' + item.banner_image;
        return item;
      });
      this.banner = data;
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit() {
    this.submitted = true;
     // stop here if form is invalid
     if (this.contactForm.invalid) {
        return;
    }
    console.log(this.contactForm.value);
   // this.contactForm.reset();
  }
}
