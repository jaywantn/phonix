import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './page/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    ProductRoutingModule
	]
})
export class ProductModule { }
