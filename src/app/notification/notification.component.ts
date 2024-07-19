import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification === true}"><p>This website uses cookies to provide better user experience.</p><div class="close"><button class="btn" (click)="closeNotification()">X</button></div></div>',
  styles: [".notification-div{margin: 10px 0px; padding:5px 10px; background-color: #FAD7A0; text-align:center;}", 
    "p{font-size: 18px;}", ".close{float: right; margin-top: -50px;}",
    ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification = true;
  }

}
