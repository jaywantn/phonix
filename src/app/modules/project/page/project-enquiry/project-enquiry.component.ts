import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-enquiry',
  templateUrl: './project-enquiry.component.html',
  styleUrls: ['./project-enquiry.component.css'],
})
export class ProjectEnquiryComponent implements OnInit {
  enquiryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void { }

  get name(): any {
    return this.enquiryForm.get('name');
  }
  get email(): any {
    return this.enquiryForm.get('email');
  }
  get phone(): any {
    return this.enquiryForm.get('phone');
  }
  get address(): any {
    return this.enquiryForm.get('address');
  }

  onSubmit(): void {
    console.log(this.enquiryForm.value);
  }
}
