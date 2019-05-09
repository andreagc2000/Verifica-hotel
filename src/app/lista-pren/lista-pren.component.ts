import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {
 @Input() book : Booking[];
  selectedP : Booking;
  constructor() { }

  ngOnInit() {
  }

 onClick(p : Booking)
  {
    this.selectedP = p;
  }
}
