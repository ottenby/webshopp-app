import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private fb: FormBuilder) { }


  getUser() {
    let user = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
  
      address: this.fb.group({
        street: [''],
        zip: [''],
        city: ['']
        
      })
    });
    return user
  }
  sendOrder(order) {
    console.log(order);
  }
}
