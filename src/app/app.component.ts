import { Component } from '@angular/core';
import { RoomList } from './roomLsit.model';
import { Room } from './room.model';
import { Booking } from './booking.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //countryForm: FormGroup;
  title = "Benvenuti all'hotel degli alberi";
  rooms = RoomList;
  selectedRoom: Room = RoomList[0];
  bookingList : Booking[];
  obs: Observable<Object>;
  obsPreno: Observable<Booking[]>;
  prenoData: Booking[];
    data: Object;
  constructor(public http: HttpClient) { this.makeTypedRequest(); }
  
    makeTypedRequest(): void {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.obsPreno = this.http.get<Booking[]>(' https://my-json-server.typicode.com/malizia-g/hotel/booking');
    this.obsPreno.subscribe(data => { this.prenoData = data;  });
  }
  


  //Controllo se l'id della stanza selezionata è nell'elenco.
  //In questo caso imposto la variabile selectedRoom
  onChange(r_id: number) {
    RoomList.forEach(
      (room: Room) => {
        if (room.id == r_id) this.selectedRoom = room;
      }
    )
  }

  onClick(n: HTMLInputElement ,c : HTMLInputElement ,d : HTMLInputElement, e :HTMLInputElement ) : boolean
  {
    this.bookingList.push(new Booking(this.selectedRoom,new Date(d.value), new Date(e.value) ,n.value,c.value));
    return false;
  }
   onAddBook( n: HTMLInputElement, c: HTMLInputElement, d: HTMLInputElement,  e: HTMLInputElement) : boolean
  {
    let book: Booking = new Booking(this.selectedRoom,new Date(d.value), new Date(e.value) ,n.value,c.value);
    book.name = n.value;
    book.surname = c.value;
    book.from = new Date(d.value);
    book.to = new Date(e.value);
    this.prenoData.push(book);
    this.makeCompactPost(book);
    return false;
  }
     makeCompactPost(book:Booking): void {
   this.http.post('https://my-json-server.typicode.com/malizia-g/hotel/booking',JSON.stringify(book))
     .subscribe(data => {
       this.data = data;
     });
 }
}
