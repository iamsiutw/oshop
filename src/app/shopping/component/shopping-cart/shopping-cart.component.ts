import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {bounceOutLeftAnimation, fade, fadeInAnimation, slide} from '../../../shared/animations';
import {animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('shopsAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)'}),
            animate(400)
          ]),
          query('table', [
            useAnimation(fadeInAnimation)
          ])
        ])
      ])
    ]),
    trigger('shopAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1s'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = ['product', 'quantity', 'price'];
  cart$;
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
  clearCart() {
    this.shoppingCartService.clearCart();
  }
}
