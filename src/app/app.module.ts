import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DadiComponent } from './dadi/dadi.component';
import { NeveComponent } from './neve/neve.component';
import { BooksComponent } from './books/books.component';
import { EventiComponent } from './eventi/eventi.component';
import { EventiOutputComponent } from './eventi-output/eventi-output.component';
import { EventiOutputItemComponent } from './eventi-output/eventi-output-item/eventi-output-item.component';
import { EventiInputComponent } from './eventi-input/eventi-input.component';
import { EventiInputChildComponent } from './eventi-input/eventi-input-child/eventi-input-child.component';
import { UsoServiceComponent } from './uso-service/uso-service.component';
import { LibriConServizioComponent } from './libri-con-servizio/libri-con-servizio.component';

@NgModule({
  declarations: [
    AppComponent,
    DadiComponent,
    NeveComponent,
    BooksComponent,
    EventiComponent,
    EventiOutputComponent,
    EventiOutputItemComponent,
    EventiInputComponent,
    EventiInputChildComponent,
    UsoServiceComponent,
    LibriConServizioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
