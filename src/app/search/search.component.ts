import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  // changeValue(e: Event){
  //   this.searchValue = (<HTMLInputElement>e.target).value;
  // }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChanged.emit(this.searchValue);
  }
}
