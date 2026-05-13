import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { ProductsComponent } from './user/products/products.component';
import { CartComponent } from './user/cart/cart.component';

import { OrdersComponent } from './user/orders/orders.component';
import { DetailsComponent } from './user/details/details.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user', component: UserdashboardComponent,
    children: [
      { path: 'view', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      {path: 'wishlist',component:WishlistComponent},
      { path: 'orders', component: OrdersComponent },
      { path: 'details/:pid', component: DetailsComponent }
    ]
  },
  {
    path: 'admin', component: DashboardComponent,
    children: [
      { path: 'add', component: AddproductComponent },
      { path: 'view', component: ViewproductComponent },
      { path: 'manage', component: ManageproductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
