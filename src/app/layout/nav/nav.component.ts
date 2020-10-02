import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

 // import { environment } from '@env';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { ThemeService } from '../../core/service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //public version = environment.version;
  modalRef: BsModalRef;
  @ViewChild('template') modalTemplate: TemplateRef<any>;
  contactForm: FormGroup;
  submitted = false;

  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  public isDarkTheme$: Observable<boolean>;
  phoneNumber;
  generalData: any[] = JSON.parse(sessionStorage.getItem('generalDetails'));
  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];

  constructor(
  //  private themeService: ThemeService
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    //this.phoneNumber = this.generalData[5]['description'];
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  toggleTheme(checked: boolean) {
    // this.themeService.setDarkTheme(checked);
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplate);
  }
  get f() {
    return this.contactForm.controls;
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
