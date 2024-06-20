import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car-form-popup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-car-form-popup.component.html',
  styleUrl: './add-car-form-popup.component.css'
})
export class AddCarFormPopupComponent {
  @Input() isVisible = false;
  @Output() carAdded = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();

  newCar = {
    model: '',
    brand: '',
    year: 0,
    km: 0,
    price: 0,
    location: 'emplacement-1',
    status: 'Disponible'
  };

  onSubmit() {
    this.carAdded.emit(this.newCar);
    this.isVisible = false;
  }

  cancel() {
    this.cancelled.emit();
    this.isVisible = false;
  }

  locations: string[] = [
    'emplacement-1',
    'emplacement-2',
    'emplacement-3',
    'emplacement-4',
    'emplacement-5'
  ];
}
