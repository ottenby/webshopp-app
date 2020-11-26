import { TestBed } from '@angular/core/testing';

import { ShowDetailsService } from './show-details.service';

describe('ShowDetailsService', () => {
  let service: ShowDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
