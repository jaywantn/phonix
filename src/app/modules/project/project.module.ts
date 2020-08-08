import { NgModule } from '@angular/core';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './page/project/project.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
@NgModule({
  declarations: [ProjectComponent,
    ProjectDetailsComponent],
  imports: [
    ProjectRoutingModule
	]
})
export class ProjectModule { }
