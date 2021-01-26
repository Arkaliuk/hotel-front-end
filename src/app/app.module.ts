import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { HotelRoomsPageComponent } from './hotel-rooms-page/hotel-rooms-page.component';
import { ReservedPageComponent } from './reserved-page/reserved-page.component';
import { RouterModule } from '@angular/router';
import { HotelRoomComponent } from './hotel-room/hotel-room.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InformationPageComponent,
    HotelRoomsPageComponent,
    ReservedPageComponent,
    HotelRoomComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: 'hotel-rooms', component: HotelRoomsPageComponent },
      { path: 'information', component: InformationPageComponent },
      {  path: 'reserved', component: ReservedPageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
