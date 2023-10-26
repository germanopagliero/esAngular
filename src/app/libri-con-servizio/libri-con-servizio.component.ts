import { Component } from '@angular/core';
import { LibriModel  } from './libri.models';
import { LibriService } from '../services/libri.service';

@Component({
  selector: 'app-libri-con-servizio',
  templateUrl: './libri-con-servizio.component.html',
  styleUrls: ['./libri-con-servizio.component.css']
})
export class LibriConServizioComponent {
  constructor(public libriService:LibriService){}
  btnClick(id:string){
    this.libriService.getLibro(id);
    console.log("hai selezionato id="+id+" "+this.libriService.libro.author);
    window.alert("hai selezionato id="+id+" "+this.libriService.libro.author);
    window.alert();
  }
  btnInserisciClick(){
    var l={
      "id": "",
      "author": "Germano",
      "country":"Italy",
      "pages": 777,
      "title": "myAngular",
      "year": 2021
    }
    this.libriService.postLibro(l);
    this.libriService.getLibri();
  }
  btnModificaClick(libro: LibriModel){
    var l={
      "id": libro.id,
      "author": libro.author + "MODIFICATO",
      "country": libro.country,
      "pages": libro.pages,
      "title": libro.title,
      "year": libro.year
    }
    this.libriService.putLibro(libro.id, l);
    this.libriService.getLibri();
  }
  btnCancellaClick(id:string){
    this.libriService.deleteLibro(id);
    this.libriService.getLibri();
  }
  ngOnInit(): void {
    this.libriService.getLibri();
  }
}
