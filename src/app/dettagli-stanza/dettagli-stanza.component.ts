import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-dettagli-stanza',
  templateUrl: './dettagli-stanza.component.html',
  styleUrls: ['./dettagli-stanza.component.css']
})
export class DettagliStanzaComponent implements OnInit {
 @Input() pDet : Booking;
  constructor() { }

  ngOnInit() {
  }

}
