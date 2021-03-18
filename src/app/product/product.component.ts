import { ProductService } from './../shared/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product;

  constructor(
    private productServ: ProductService
  ) {}

  ngOnInit(): void {}

  addProduct(product) {
    this.productServ.addProduct(product)
  }
}
