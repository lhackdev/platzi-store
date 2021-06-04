import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        ProductRoutingModule,
        CommonModule
    ]
})
export class ProductModule{

}