import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarWorkshopPopupComponent } from './add-car-workshop-popup.component';

describe('AddCarWorkshopPopupComponent', () => {
  let component: AddCarWorkshopPopupComponent;
  let fixture: ComponentFixture<AddCarWorkshopPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCarWorkshopPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCarWorkshopPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
