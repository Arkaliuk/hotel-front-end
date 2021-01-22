import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomsPageComponent } from './hotel-rooms-page.component';

describe('HotelRoomsPageComponent', () => {
  let component: HotelRoomsPageComponent;
  let fixture: ComponentFixture<HotelRoomsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
