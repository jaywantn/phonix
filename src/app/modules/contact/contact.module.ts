import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from 'shared/shared.module';

import { ContactComponent } from './page/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './contact.service';
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
})
export class ContactModule {}
