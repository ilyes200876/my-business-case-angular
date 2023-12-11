import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftUpdateComponent } from './nft-update.component';

describe('NftUpdateComponent', () => {
  let component: NftUpdateComponent;
  let fixture: ComponentFixture<NftUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftUpdateComponent]
    });
    fixture = TestBed.createComponent(NftUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
