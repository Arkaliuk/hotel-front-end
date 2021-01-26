import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.scss']
})
export class HotelRoomComponent implements OnInit {


  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
    this.getRooms();
  }


  @Output() event = new EventEmitter();
  newType: any;
  newClass: any;
  newCheckIn: any;
  newCheckOut: any;
  @Input() hotelRooms: any;

  getRooms() {
    return this.hotelService.getHotelRooms().subscribe((data: {}) => {
      this.hotelRooms = data;
    })
  }

  openModal(modal) {
    modal.style.display = "block";
  }
  closeModal(modal) {
    modal.style.display = "none";
  }

  onSubmit() {
    this.event.emit(this.getValueForm());
  }

  getValueForm() {
    let data = { hotelRoom: { id: 1 }, client: { id: 1 }, checkIn: this.newCheckIn, checkOut: this.newCheckOut }
    // this.newType = '';
    // this.newClass = '';
    this.newCheckIn = '';
    this.newCheckOut = '';
    return data;
  }
}