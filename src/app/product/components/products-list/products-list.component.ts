import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './../../../core/service/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  

  constructor( private productService: ProductsService) { }

  products!: Product[];

  ngOnInit(): void {
    // this.products = this.productService.getAllPoroducts();
    this.fetchProducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

  fetchProducts(){
    this.productService.getAllPoroducts().subscribe(products => {
      this.products = products;
    })
  }

}
