
import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {AuthService} from '../../../shared/service/auth.service';
import {OrderService} from '../../../shared/service/order.service';
import {fade, slide} from '../../../shared/animations';
import {animate, group, query, style, transition, trigger, useAnimation} from '@angular/animations';
import {MergePipe} from './merge.pipe';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  animations: [
    trigger('orderAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)'}),
            animate(400)
          ])
        ])
      ])
    ]),
    slide, fade
  ]
})
export class MyOrdersComponent implements OnInit{
  orders$;
  orders: any = [];
  ordersTotalPrice: any = [];
  arr: any = [];
  constructor(
    private authService: AuthService,
    private orderService: OrderService) {
    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)));
  }
  async ngOnInit() {
    await this.orders$.subscribe(order => this.orders = order);
    await this.orders$.subscribe(
      order => this.ordersTotalPrice = order.map(x => x.items.map(y => y.totalPrice).reduce(( acc, cur ) => acc + cur, 0))
    );

  }
}
