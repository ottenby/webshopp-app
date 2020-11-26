import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { MovieService } from 'src/app/services/movie.service';
import MockMovieService from 'src/app/services/MockMovieService';
import { CartService } from 'src/app/services/cart.service';
import MockCartService from 'src/app/services/MockCartService';



describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [
        ProductsComponent,
        { provide: MovieService, useClass: MockMovieService },
        { provide: CartService, useClass: MockCartService  } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get movies', ()=> {

    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.movies[0].description).toContain('poop');
    expect(component.movies[1].year).toEqual(2001);
  });
});
