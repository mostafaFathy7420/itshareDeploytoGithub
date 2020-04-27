import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = 
[

{ path: 'products' , component : ProductsComponent} ,
{ path: 'orders' , component : MyOrdersComponent} ,
{ path: 'admin/orders' , component : AdminOrdersComponent} ,
{ path: 'admin/products' , component : ProductsComponent} ,
{ path: 'shopping-cart' , component : ShoppingCartComponent} ,
{ path: 'login' , component : LoginComponent} ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
