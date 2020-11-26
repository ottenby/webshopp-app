import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import CartItem from 'src/app/models/CartItem';
import orderRows from 'src/app/models/orderRows';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice: Number;
  cartItems: CartItem[];
  orderRows: orderRows[];

  clearCart() {
    this.cartItems = this.cartService.clearCart();
    this.orderRows = this.cartService.clearOrderRows();
    this.totalPrice = 0;
    console.log('cart empty');
  }

  removeItem(pushedItem) {
    this.cartService.removeFromCart(pushedItem);
    this.totalPrice = this.cartService.showTotalPrice();
  }


  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.showTotalPrice();
    this.orderRows = this.cartService.getOrderRows();
  }

}
