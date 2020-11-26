import orderRows from '../models/orderRows';
import CartItem from '../models/CartItem';

export default interface ICartService {
    cartItems: CartItem[];
    totalPrice: number;
    orderRows: orderRows[];


    removeFromCart(pushedItem);

    showTotalPrice();

    addToCart(product);

}