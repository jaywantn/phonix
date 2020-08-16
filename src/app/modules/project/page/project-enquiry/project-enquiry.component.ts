import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-enquiry',
  templateUrl: './project-enquiry.component.html',
  styleUrls: ['./project-enquiry.component.css'],
})
export class ProjectEnquiryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enquiryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    // isAgree: new FormControl(),
  });

  get name() {
    return this.enquiryForm.get('name');
  }
  get email() {
    return this.enquiryForm.get('email');
  }
  get phone() {
    return this.enquiryForm.get('phone');
  }
  get address() {
    return this.enquiryForm.get('address');
  }
  // get isAgree() {
  //   return this.enquiryForm.get('isAgree');
  // }

  onSubmit() {
    console.log(this.enquiryForm.value);
  }
}
