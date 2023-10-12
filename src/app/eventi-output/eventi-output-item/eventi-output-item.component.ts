import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-eventi-output-item',
  templateUrl: './eventi-output-item.component.html',
  styleUrls: ['./eventi-output-item.component.css']
})
export class EventiOutputItemComponent {
  //N.B aggiungere import Output e EventEmitter
  //vedere https://angular.io/guide/inputs-outputs

  @Output() newItemEvent = new EventEmitter<string>();
  newItem:string="";
  addNewItem() {
    this.newItemEvent.emit(this.newItem);
}
}
