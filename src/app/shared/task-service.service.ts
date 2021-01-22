import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  apiURL = 'http://localhost:8080/todo';
  apiURLList = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getLists(): Observable<TodoList> {
    return this.http.get<TodoList>(this.apiURLList)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTasks(): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  getTasksForToday(): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/collection/today')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  getTasksByListId(id): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/' + id + '/tasks')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  createTask(todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, JSON.stringify(todo), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteTask(id) {
    return this.http.delete<Todo>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}