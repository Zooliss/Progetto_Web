import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferteComponent } from './offerte.component';

describe('OfferteComponent', () => {
  let component: OfferteComponent;
  let fixture: ComponentFixture<OfferteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferteComponent]
    });
    fixture = TestBed.createComponent(OfferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
