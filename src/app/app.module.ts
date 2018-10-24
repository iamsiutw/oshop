import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {LoginComponent} from './core/component/login/login.component';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ShoppingModule} from './shopping/shopping.module';
import {ProductsComponent} from './shopping/component/products/products.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedMaterialModule} from './shared/shared-material/shared-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent}
    ]),
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
