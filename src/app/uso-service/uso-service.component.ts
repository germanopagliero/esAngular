import { Component } from '@angular/core';
import {MyrndService} from '../services/myrnd.service';

@Component({
  selector: 'app-uso-service',
  templateUrl: './uso-service.component.html',
  styleUrls: ['./uso-service.component.css']
})
export class UsoServiceComponent {

  da:string="";
  a:string="";
  numero:number=0;
  //nel costruttore inietto il servizio
  //N.B fare la import
  constructor(private myrndService:MyrndService) { 
    this.da=(1).toString();
    this.a=(10).toString();
  }
  btnClick(){
    this.myrndService.setValue(this.da,this.a);
    this.numero=this.myrndService.rnd();
  }
  ngOnInit(): void {
  }

}

