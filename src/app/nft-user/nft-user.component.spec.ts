import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftUserComponent } from './nft-user.component';

describe('NftUserComponent', () => {
  let component: NftUserComponent;
  let fixture: ComponentFixture<NftUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftUserComponent]
    });
    fixture = TestBed.createComponent(NftUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
