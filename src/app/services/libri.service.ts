import { Injectable } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { LibriModel } from '../libri-con-servizio/libri.models';

@Injectable({
  providedIn: 'root'
})
export class LibriService {
  libri: LibriModel[] = [];
  libro!: LibriModel;
  constructor(private dataStorageService: DataStorageService) { 
    
  }
  getLibri(){
    this.dataStorageService.sendGetRequest('books').subscribe({
      next: (data: any) => {
        console.log(data);
        this.libri = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }
  getLibro(id:string){
    this.dataStorageService.sendGetRequest('books/'+id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.libro = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }
  postLibro(body:any){
    this.dataStorageService.sendPostRequest('books/',body).subscribe({
      next: (data: any) => {
        console.log(data);
        this.libro = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }
  putLibro(id:string, body:any){
    this.dataStorageService.sendPutRequest('books/'+id,body).subscribe({
      next: (data: any) => {
        console.log(data);
        this.libro = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }
  deleteLibro(id:string){
    this.dataStorageService.sendDeleteRequest('books/'+id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.libro = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    })
  }
}
