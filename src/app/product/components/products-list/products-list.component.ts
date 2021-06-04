import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  

  constructor( private productService: ProductsService) { }

  products!: Product[];

  ngOnInit(): void {
    this.products = this.productService.getAllPoroducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }

}
