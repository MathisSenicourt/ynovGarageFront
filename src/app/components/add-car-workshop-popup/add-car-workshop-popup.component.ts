import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car-workshop-popup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-car-workshop-popup.component.html',
  styleUrl: './add-car-workshop-popup.component.css'
})
export class AddCarWorkshopPopupComponent {
  @Input() isVisible = false;
  @Output() carAdded = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();

  newCar = {
    car: '',
    repairType: '',
    location: 'emplacement-1',
    mechanic: 'John Doe',
    owner :''
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

  mechanics: string[] = [
    'John Doe',
    'Mathis Senicourt',
    'Jane Smith',
    'Thomas Cornu',
    'Antoine Raimand'
  ];
}
