import { Component } from '@angular/core';
//importo il file json con i libri
import { books } from 'src/assets/dati/books'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  libri:any = books; //creo array di libri
  visPag:boolean = false; //serve per visualizzare/nascondere una colonna
  constructor(){
    this.visPag = false;
  }
}
