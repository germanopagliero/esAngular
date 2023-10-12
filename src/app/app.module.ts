import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DadiComponent } from './dadi/dadi.component';
import { NeveComponent } from './neve/neve.component';
import { BooksComponent } from './books/books.component';
import { EventiComponent } from './eventi/eventi.component';
import { EventiOutputComponent } from './eventi-output/eventi-output.component';
import { EventiOutputItemComponent } from './eventi-output/eventi-output-item/eventi-output-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DadiComponent,
    NeveComponent,
    BooksComponent,
    EventiComponent,
    EventiOutputComponent,
    EventiOutputItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
