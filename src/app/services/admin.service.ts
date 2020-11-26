import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Order from '../models/order';
import { Subject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  orders = new Subject<Order[]>();
  url: string = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=925';

  constructor(private http: HttpClient, private httpTwo: HttpClient) { }

  getOrders() {
    this.httpTwo.get(this.url)
    .subscribe((data: any) => {
      console.log(data);
      const ordersFromApi: Order[] = data.map(o => {
        const order = new Order();
        order.companyId = o.companyId;
        order.created = o.created;
        order.createdBy = o.createdBy;
        order.id = o.id;
        order.orderRows = o.orderRows;
        order.paymentMethod = o.paymentMethod;
        order.status = o.status;
        order.totalPrice = o.totalPrice;
        return order;
      });
      this.orders.next(ordersFromApi);
    })
  }


  deleteOrder(id: number): Observable<{}> {

    const url = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${id}`;
    
    return this.http.delete(url);
  }
}
