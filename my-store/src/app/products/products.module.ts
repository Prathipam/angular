import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDataService } from './product-data.service';
import { MyStoreMaterialModule } from '../material-module'


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MyStoreMaterialModule
  ],
  providers:[ProductDataService]
})
export class ProductsModule { }
