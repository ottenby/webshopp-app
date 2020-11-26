import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import MockCartService from 'src/app/services/MockCartService';
import Movie from 'src/app/models/movie';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        CartComponent,
        { provide: CartService, useClass: MockCartService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get cart', () => {
    expect(component.cartItems.length).toBeGreaterThan(0);
    expect(component.cartItems.length).toEqual(2);

   
  }) 
  it('should reduce cartItems', ()=> {
    expect(component.cartItems.length).toEqual(2);
    let product = new Movie;
    product.id = 20;
    product.price = 100;
    product.title = 'Pochahontas'
    product.year = 1992;
    component.removeItem(product);
    expect(component.cartItems.length).toEqual(1);
  });
});
