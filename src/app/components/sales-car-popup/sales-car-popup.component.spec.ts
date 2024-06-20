import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCarPopupComponent } from './sales-car-popup.component';

describe('SalesCarPopupComponent', () => {
  let component: SalesCarPopupComponent;
  let fixture: ComponentFixture<SalesCarPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesCarPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesCarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
