import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent {

  constructor(private readonly router:Router) {}

  goToUser(): void{
    this.router.navigate(['user']);
  }
  ngOnInit(): void {
  }

}
