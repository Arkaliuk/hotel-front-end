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
  @Output() selectedRoomEvent = new EventEmitter();
  selectedRoom: number;
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

  openModal(modal, id) {
    modal.style.display = "block";
    this.selectedRoom = id;
  }

  closeModal(modal) {
    modal.style.display = "none";
  }

  onSubmit(modal) {
    this.event.emit(this.getValueForm());
    this.closeModal(modal);
  }

  getValueForm() {
    let data = { client: { id: 1 }, checkIn: this.newCheckIn, checkOut: this.newCheckOut, hotelRoom: { id: this.selectedRoom } }
    this.newCheckIn = '';
    this.newCheckOut = '';
    return data;
  }
}