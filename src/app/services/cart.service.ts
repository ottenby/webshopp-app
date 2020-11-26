import { Injectable } from '@angular/core';
import CartItem from '../models/CartItem';
import orderRows from '../models/orderRows';
import ICartService from './ICartService';


@Injectable({
  providedIn: 'root'
})
export class CartService implements ICartService {

  cartItems: CartItem[] = [];
  totalPrice = 0;
  orderRows: orderRows[] = [];

  removeFromCart(pushedItem) {
    let index = this.cartItems.indexOf(pushedItem);
    let indexOforderRow = this.orderRows.indexOf(pushedItem.id);
    console.log(indexOforderRow);

    this.cartItems.splice(index, 1);
    this.orderRows.splice(indexOforderRow, 1);
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += item.price;

      console.log(pushedItem);
    });
    console.log(this.orderRows);
  }

  showTotalPrice() {
    if(this.totalPrice === 0) {
    this.cartItems.forEach(item => {
      this.totalPrice += item.price;
    });
  }
    return this.totalPrice
  }


  addToCart(product) {
    console.log(product);
    let itemToAdd = new CartItem;
    itemToAdd.product = product.movie;
    itemToAdd.price = product.movie.price;
    itemToAdd.id = product.movie.id;
    itemToAdd.amount = 1;
    this.cartItems.push(itemToAdd);
  

    let order = new orderRows;
    order.amount = 1;
    order.productId = product.movie.id;
    this.orderRows.push(order);
  }

  getOrderRows() {
    return this.orderRows;
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
  clearOrderRows() {
    this.orderRows = [];
    return this.orderRows;
  }
  constructor() { }
}
