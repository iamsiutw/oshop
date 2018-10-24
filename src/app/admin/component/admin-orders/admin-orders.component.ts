import { OrderService } from '../../../shared/service/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }
  changeStatus(event, orderId) {
    this.orderService.changeShipStatus(event.checked, orderId);
  }
}
