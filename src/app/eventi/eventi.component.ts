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
  
  ngOnInit(): void {
    this.nome="Inserito da ngOnInit";
  }
  btnClick(){
    window.alert('Salve Mondo')
  }
  txtNomeTextChanged() {
    this.textChanged=this.nome;
  }
}
