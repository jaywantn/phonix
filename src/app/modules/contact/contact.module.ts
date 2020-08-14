import { NgModule } from '@angular/core';

// import { SharedModule } from 'shared/shared.module';
import { ContactRoutes } from './contact-routing.module';
import { ContactComponent } from './page/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutes ,GoogleMapsModule
  ]
})
export class ContactModule { }
