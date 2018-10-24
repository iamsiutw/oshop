import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartComponent} from './component/shopping-cart/shopping-cart.component';
import {ShoppingCartSummaryComponent} from './component/shopping-cart-summary/shopping-cart-summary.component';
import {ShippingFormComponent} from './component/shipping-form/shipping-form.component';
import {MyOrdersComponent} from './component/my-orders/my-orders.component';
import {ProductFilterComponent} from './component/products/product-filter/product-filter.component';
import {OrderSuccessComponent} from './component/order-success/order-success.component';
import {CheckOutComponent} from './component/check-out/check-out.component';
import {ProductsComponent} from './component/products/products.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/service/auth-guard.service';
import {SharedModule} from '../shared/shared.module';
import {SharedMaterialModule} from '../shared/shared-material/shared-material.module';
import {MyOrderDetailComponent} from './component/my-orders/my-order-detail/my-order-detail.component';
import {MergePipe} from './component/my-orders/merge.pipe';


@NgModule({
  imports: [
    SharedModule,
    SharedMaterialModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      {path: 'my/orders/:orderId', component: MyOrderDetailComponent, canActivate: [AuthGuard]}
    ])
  ],
  declarations: [
    MergePipe,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrderDetailComponent
  ]
})
export class ShoppingModule { }
