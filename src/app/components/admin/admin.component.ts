import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Order from 'src/app/models/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  orders: Order[] = [];

  
  

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.adminService.orders.subscribe((order: Order[]) => {
      this.orders = order;
    });
    this.adminService.getOrders();
  }

}
