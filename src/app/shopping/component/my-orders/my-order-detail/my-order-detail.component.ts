import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../shared/service/auth.service';
import {OrderService} from '../../../../shared/service/order.service';
import {switchMap, take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-order-detail',
  templateUrl: './my-order-detail.component.html',
  styleUrls: ['./my-order-detail.component.css']
})
export class MyOrderDetailComponent {
  orderId;
  orderDatePlaced: any = [];
  order$: any = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private orderService: OrderService) {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
    this.order$ = this.orderService.getOrderItems(this.orderId).valueChanges();
    this.orderDatePlaced = this.orderService.getOrderDate(this.orderId).valueChanges();
    console.log(this.orderDatePlaced);
  }
}
