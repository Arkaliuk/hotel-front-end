import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'hotel-rooms-page',
  templateUrl: './hotel-rooms-page.component.html',
  styleUrls: ['./hotel-rooms-page.component.scss']
})
export class HotelRoomsPageComponent implements OnInit {

  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  addReserve(reserve) {
    this.hotelService.addReserve(reserve).subscribe();
  }
}
