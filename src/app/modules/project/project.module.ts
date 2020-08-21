import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './page/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectEnquiryComponent } from './page/project-enquiry/project-enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ProjectService} from './project.service';
import { SafeHtmlPipe } from '../../core/safeHtml.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailsComponent,
    ProjectEnquiryComponent,
    SafeHtmlPipe
  ],
  imports: [CommonModule, ProjectRoutingModule, ReactiveFormsModule, CarouselModule],
  providers :[ProjectService]
})
export class ProjectModule {}
