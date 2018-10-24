import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../shared/service/auth.service';
import {OrderService} from '../../../shared/service/order.service';

@Component({
  selector: 'app-orders-manage',
  templateUrl: './orders-manage.component.html',
  styleUrls: ['./orders-manage.component.css']
})
export class OrdersManageComponent {
  orderId;
  orderDatePlaced: any = [];
  order$: any = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private orderService: OrderService) {
    this.orderId = this.route.snapshot.paramMap.get('orderId');
    this.order$ = this.orderService.getOrderItems(this.orderId).valueChanges();
    this.orderService.getOrderDate(this.orderId).valueChanges().subscribe(orderDate => this.orderDatePlaced = orderDate[0]);
  }

}
