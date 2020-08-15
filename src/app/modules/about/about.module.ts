import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about/about.component';
import { AboutService } from './about.service';
@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,CommonModule
  ],
  providers: [AboutService],
})
export class AboutModule { }
