import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedRadioButton: string = "All";

  @Output()
  filterProducts: EventEmitter<string> = new EventEmitter<string>();
  
  onRadioButtonSelection(){
    this.filterProducts.emit(this.selectedRadioButton);
  }
}
