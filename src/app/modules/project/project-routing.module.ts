import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './page/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ProjectEnquiryComponent } from './page/project-enquiry/project-enquiry.component';
const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'details/:id', component: ProjectDetailsComponent },
  { path: 'enquiry/:id', component: ProjectEnquiryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
