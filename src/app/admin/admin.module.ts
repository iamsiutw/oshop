import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductFormComponent} from './component/product-form/product-form.component';
import {AdminProductsComponent} from './component/admin-products/admin-products.component';
import {AdminOrdersComponent} from './component/admin-orders/admin-orders.component';
import {AdminAuthGuard} from './services/admin-auth-guard.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/service/auth-guard.service';
import {SharedMaterialModule} from '../shared/shared-material/shared-material.module';
import {OrdersManageComponent} from './component/orders-manage/orders-manage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/orders/:orderId',
        component: OrdersManageComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    OrdersManageComponent,
  ],
  providers: [
    AdminAuthGuard
  ]
})
export class AdminModule { }
