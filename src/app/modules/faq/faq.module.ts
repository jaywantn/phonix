import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './page/faq/faq.component';
import { FaqService } from './faq.service';
@NgModule({
  declarations: [FaqComponent],
  imports: [
    FaqRoutingModule,CommonModule
  ],
  providers: [FaqService],
})
export class FaqModule { }
