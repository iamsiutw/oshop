import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Observable} from 'rxjs';
import {ShoppingCart} from '../../../shared/models/shopping-cart';
import {ProductService} from '../../../shared/service/product.service';
import {Product} from '../../../shared/models/product';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;
  filteredProducts: Product[] = [];
  category;
  cart$: Observable<ShoppingCart>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
    ) {
  }
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }
  private populateProducts() {
    this.productService.getAll().pipe(
      switchMap(products => {
        this.products$ = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }
  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products$.filter(p => p.category === this.category) :
      this.products$;
  }
}
