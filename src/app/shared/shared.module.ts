import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductCardComponent} from './component/product-card/product-card.component';
import {ProductQuantityComponent} from './component/product-quantity/product-quantity.component';

import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/auth-guard.service';
import {UserService} from './service/user.service';
import {CategoryService} from './service/category.service';
import {ProductService} from './service/product.service';
import {ShoppingCartService} from './service/shopping-cart.service';
import {OrderService} from './service/order.service';

import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedMaterialModule} from './shared-material/shared-material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
