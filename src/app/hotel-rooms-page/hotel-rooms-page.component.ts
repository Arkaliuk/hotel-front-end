import { Component, OnInit, Output } from '@angular/core';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'hotel-rooms-page',
  templateUrl: './hotel-rooms-page.component.html',
  styleUrls: ['./hotel-rooms-page.component.scss']
})
export class HotelRoomsPageComponent implements OnInit {

  @Output() filterRooms: any;
  selectedId: number;
  constructor(public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  filterHotelRoom(type: any, classRoom: any, price: any) {
    this.hotelService.getHotelRoomsByCondition(type, classRoom, price).subscribe((data: {}) => {
      this.filterRooms = data;
    })
  }

  reset(type: any, classRoom: any, price: any) {
    type.value = "None";
    classRoom.value = "None";
    price.value = '';
    this.hotelService.getHotelRooms().subscribe((data: {}) => {
      this.filterRooms = data;
    })
  }

  selectRoomId(id) {
    this.selectedId = id;
  }

  addReserve(reserve) {
    this.hotelService.addReserve(reserve).subscribe();
  }
}
