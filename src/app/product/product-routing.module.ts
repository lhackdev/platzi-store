import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent
    },
    { 
        path: 'products/:id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports : [
        RouterModule
    ]
})

export class ProductRoutingModule{

}
