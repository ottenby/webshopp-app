import { Component, OnInit, Input } from '@angular/core';
import Order from 'src/app/models/order';
import orderRows from 'src/app/models/orderRows';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;
  @Input() orderRow: orderRows;;
  
  orderRows: orderRows[];

  

  deleteOrder() {
    this.adminService.
    deleteOrder(this.order.id).
    subscribe(data => {
      console.log(data);
    });
    this.adminService.getOrders();
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.orderRows = this.order.orderRows
   
  }

}
