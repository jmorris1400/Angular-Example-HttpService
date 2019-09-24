import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGame } from './games';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GameService {

  private _url: string = "http://localhost:4000/api/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}

