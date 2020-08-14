import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './page/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectEnquiryComponent } from './page/project-enquiry/project-enquiry.component';
@NgModule({
  declarations: [ProjectComponent,
    ProjectDetailsComponent,
    ProjectEnquiryComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
	]
})
export class ProjectModule { }
