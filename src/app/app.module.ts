import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailsComponent } from './user/details/details.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ProductsComponent } from './user/products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddproductComponent,
    ManageproductComponent,
    ViewproductComponent,
    UserdashboardComponent,
    CartComponent,
    DetailsComponent,
    OrdersComponent,
    ProductsComponent,
    AddproductComponent,
    WishlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
