import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module'


@NgModule({
    declarations: [
        ProductsListComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        ProductRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductModule{

}