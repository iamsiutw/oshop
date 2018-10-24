import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {ShoppingCart} from '../../models/shopping-cart';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000 )
      ])
    ])
  ]
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions: boolean;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }
  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
