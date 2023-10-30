import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-user-child',
  templateUrl: './routing-user-child.component.html',
  styleUrls: ['./routing-user-child.component.css']
})

export class RoutingUserChildComponent {
  id:string="";
  constructor(private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']; //this.activatedRoute.snapshot.paramMap.get('id')
    alert("id: "+this.id);
  }
}
