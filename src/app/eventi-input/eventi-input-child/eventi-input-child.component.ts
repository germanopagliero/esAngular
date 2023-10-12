import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventi-input-child',
  templateUrl: './eventi-input-child.component.html',
  styleUrls: ['./eventi-input-child.component.css']
})
export class EventiInputChildComponent {
  //N.B. inserire import Input
  @Input() item:string="";
}
