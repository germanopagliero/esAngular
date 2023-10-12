import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent {
  //N.B. mettere in app.module.ts FormsModule e name nei controlli
  //[(ngModel)] bidirezionale
  //[value] unidirezionale come {{ }}
  nome:string = "";
  textChanged:string = "";
  pathImg1:string = "assets/img/Mario1.png";
  pathImg2:string = "assets/img/Mario2.png";
  pathImg3:string = "assets/img/raspberry.png";
  nomeImmagine:string="";
  pathImg:string = "assets/img/vuota.png";

  ngOnInit(): void {
    this.nome="Inserito da ngOnInit";
  }
  btnClick(){
    window.alert('Salve Mondo')
  }
  txtNomeTextChanged() {
    this.textChanged=this.nome;
  }
  onMouseOver(nomeImg:string, pathImm:string){
    this.nomeImmagine=nomeImg;
    this.pathImg=pathImm;
  }
  onMouseOut() {
    this.nomeImmagine="";
    this.pathImg="assets/img/vuota.png";
  }
}
