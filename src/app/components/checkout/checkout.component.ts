import { Component, OnInit } from '@angular/core';
import Order from 'src/app/models/order';
import CartItem from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { HttpClient } from '@angular/common/http';
import orderRows from 'src/app/models/orderRows';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  newOrder: Order;
  orderExist: boolean = false;
  orderRows: orderRows[];
  user;
  dataSent: boolean = false;
  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private http: HttpClient
    ) { }


  
  ngOnInit(): void {
    this.user = this.checkoutService.getUser()
    this.orderRows = this.cartService.getOrderRows();
    this.showOrder();
    }

  save() {
    console.log(this.user.value);
    this.checkoutService.sendOrder(this.newOrder);
    this.newOrder.createdBy = this.user.value.firstName + ' ' + this.user.value.lastName;
    this.orderExist = true;
    this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
    this.newOrder).subscribe((data) => {
      console.log(data);
      this.dataSent = true;
      console.log(this.newOrder);
    });

  }
  showOrder() {
    this.newOrder = new Order;
    this.newOrder.orderRows = this.orderRows;
    this.newOrder.companyId = '925';
    this.newOrder.paymentMethod = 'Paypal';
    this.newOrder.totalPrice = this.cartService.showTotalPrice() || 0;
    this.newOrder.created = new Date;
    console.log(this.newOrder);
    
  }
}
