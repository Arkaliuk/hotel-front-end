import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HotelRoom } from '../shared/hotel-room';
import { Reserve } from '../shared/reserve';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  type: any;
  class: any;
  price: any;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  apiURL = 'http://localhost:8080/hotel';

  getHotelRooms(): Observable<HotelRoom> {
    return this.http.get<HotelRoom>(this.apiURL + '/rooms')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getHotelRoomsByCondition(): Observable<HotelRoom> {
    return this.http.get<HotelRoom>(this.apiURL + '/room')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  addReserve(reserve): Observable<Reserve> {
    return this.http.post<Reserve>(this.apiURL, JSON.stringify(reserve), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
