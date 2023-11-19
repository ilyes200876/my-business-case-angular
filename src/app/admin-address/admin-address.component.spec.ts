import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddressComponent } from './admin-address.component';

describe('AdminAddressComponent', () => {
  let component: AdminAddressComponent;
  let fixture: ComponentFixture<AdminAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddressComponent]
    });
    fixture = TestBed.createComponent(AdminAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
