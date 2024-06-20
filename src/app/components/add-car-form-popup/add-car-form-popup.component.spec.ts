import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarFormPopupComponent } from './add-car-form-popup.component';

describe('AddCarFormPopupComponent', () => {
  let component: AddCarFormPopupComponent;
  let fixture: ComponentFixture<AddCarFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCarFormPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCarFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
