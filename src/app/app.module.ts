import { LoadingService } from './core/service/loading.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AppConstants } from './app.constants';
import { LoaderComponentComponent } from './modules/loader-component/loader-component.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoaderComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    ConfigService,
    AppConstants,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
