import ICartService from './ICartService';
import CartItem from '../models/CartItem';
import orderRows from '../models/orderRows';
import { tick } from '@angular/core/testing';
import Movie from '../models/movie';



export default class MockCartService implements ICartService {
    cartItems: CartItem[] = [
        {product: 
            {title: 'Luke Skywalker',
            imgUrl: 'urlet',
            description: 'a star wars saga',
            added: new Date,
            id: 13,
            price: 199,
            year: 1976},
            price: 199, id: 13, amount: 1},
        {product: 
            {title: 'The Teenage turtles',
            imgUrl: 'urlt',
            description: 'teenage mutant ninja turtles',
            added: new Date,
            id: 42,
            price: 99,
            year: 1993},
            price: 99, id: 42, amount: 1}
    ];
    totalPrice: number = 0;
    orderRows: orderRows[] = [
        {amount: 1, productId: 13},
        {amount:1, productId: 42}
    ];
    
    

    removeFromCart() {
        this.cartItems.pop();
        this.orderRows.pop();
    };

    showTotalPrice() {
        this.cartItems.forEach(item => {
            this.totalPrice += item.price;
        })
        return this.totalPrice;
    };

    addToCart(product: Movie) {
        let itemToAdd = new CartItem;
        itemToAdd.product = product;
        itemToAdd.price = product.price;
        itemToAdd.id = product.id;
        itemToAdd.amount = 1;
        this.cartItems.push(itemToAdd);

        let orderToAdd = new orderRows;
        orderToAdd.amount = 1;
        orderToAdd.productId = product.id;
        this.orderRows.push(orderToAdd);
    };

    getOrderRows() {
        return this.orderRows;
    };

    getItems() {
        return this.cartItems;
    };

    clearCart() {
        this.cartItems = [];
        return this.cartItems;
    };

    clearOrderRows() {
        this.orderRows = [];
        return this.orderRows;
    };

}