import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './page/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
@NgModule({
  declarations: [ProjectComponent,
    ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
	]
})
export class ProjectModule { }
