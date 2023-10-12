import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi-input',
  templateUrl: './eventi-input.component.html',
  styleUrls: ['./eventi-input.component.css']
})
export class EventiInputComponent {
  currentItem:string="";
  btnClick(){
    this.currentItem = (Math.floor(Math.random() * 6)+1).toString();
  }
}
