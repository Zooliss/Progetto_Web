import { TestBed } from '@angular/core/testing';

import { ControllotokenService } from './controllotoken.service';

describe('ControllotokenService', () => {
  let service: ControllotokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllotokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
