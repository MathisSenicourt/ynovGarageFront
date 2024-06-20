import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-car-popup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sales-car-popup.component.html',
  styleUrl: './sales-car-popup.component.css'
})
export class SalesCarPopupComponent {
  @Input() isVisible = false;
  @Input() action = '';
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
    this.isVisible = false;
  }

  cancel() {
    this.confirmed.emit(false);
    this.isVisible = false;
  }
}
