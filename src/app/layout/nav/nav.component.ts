import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

 // import { environment } from '@env';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/modules/contact/contact.service';
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
  formStatus = false;
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
    private contactService: ContactService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile_no: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  toggleTheme(checked: boolean) {
    // this.themeService.setDarkTheme(checked);
  }

  openModal(): void {
    this.modalRef = this.modalService.show(this.modalTemplate);
  }
  get f() {
    return this.contactForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm.value);
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
}
