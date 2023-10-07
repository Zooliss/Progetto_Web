import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoComponent } from './accesso.component';

describe('AccessoComponent', () => {
  let component: AccessoComponent;
  let fixture: ComponentFixture<AccessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoComponent]
    });
    fixture = TestBed.createComponent(AccessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
