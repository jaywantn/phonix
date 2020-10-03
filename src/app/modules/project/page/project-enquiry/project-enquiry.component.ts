import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-enquiry',
  templateUrl: './project-enquiry.component.html',
  styleUrls: ['./project-enquiry.component.css'],
})
export class ProjectEnquiryComponent implements OnInit {
  enquiryForm: FormGroup;
  submitted = false;
  formStatus = false;
  pid = '';
  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get("id");

    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      city: ['']
    });

   }
   // convenience getter for easy access to form fields
   get enFrom() { return this.enquiryForm.controls; }



  onSubmit(): void {
    this.submitted = true;
    this.formStatus = true;
    // stop here if form is invalid
    if (this.enquiryForm.invalid) {
       return;
   }
    const data = this.enquiryForm.value;
    data["pid"] = this.pid ;
    this.projectService.sendPostRequest(data).subscribe(
      res => {
        if (res === 'success'){
          this.submitted =true;
          this.formStatus = true;
        }
        console.log('response form', res);
      }
    );
  }
}
