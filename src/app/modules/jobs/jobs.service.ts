import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {JobsInterface} from './jobs.interface';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  httpOptions = {
    headers: new Headers({'Content-Type': 'application/json', Authorization: 'Bearer s8Ovw6VYPkgOzEBBsNNKtEkqPTy1' })
  };

  getAll(): Observable<JobsInterface[]> {
    return this.http.get<JobsInterface[]>(`https://us-central1-menback-13370.cloudfunctions.net/api/jobs`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer s8Ovw6VYPkgOzEBBsNNKtEkqPTy1',
        'Content-Type': 'application/json; charset=utf-8'
      })
    }).pipe(
      tap(_ => this.log('Find jobs...')),
      catchError(this.handleError<JobsInterface[]>('getInfos', []))
    );
  }

  getById(id: number): Observable<JobsInterface[]> {
    return this.http.get<JobsInterface[]>(`https://us-central1-menback-13370.cloudfunctions.net/api/jobs/${id}`).pipe(
      tap(_ => this.log('Find job...')),
      catchError(this.handleError<JobsInterface[]>('getInfos', []))
    );
  }

  private log(msg: string) {
    console.log(msg);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }
}
