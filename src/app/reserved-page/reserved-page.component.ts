import { Component, Input, OnInit, Output } from '@angular/core';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'reserved-page',
  templateUrl: './reserved-page.component.html',
  styleUrls: ['./reserved-page.component.scss']
})
export class ReservedPageComponent implements OnInit {
  @Input() reservedRooms: any;

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
    this.getHotelRooms();
  }

  getHotelRooms() {
    return this.hotelService.getReserveHotelRoom().subscribe((data: {}) => {
      this.reservedRooms = data;
    })
  }
}
