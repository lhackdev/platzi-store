import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { Product } from 'src/app/core/models/product.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];


  constructor(
    private productService: ProductsService
  ) { }

  products!:Product[];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllPoroducts()
    .subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta);
    })
  }





}
