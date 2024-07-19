import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = "One stop solution for everything!";
  @Input() src = "";
  source: string = "/assets/shipping.jpg";
  getSlogan(){
    return this.slogan;
  }
}
