import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LogService } from '../log/log.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  private itemsUrl = 'http://localhost:3000/items';

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      tap(_ => this.log('fethced all item')),
      catchError(this.handleError('getItems', []))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap(_ => this.log('added item')),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    const url = `${this.itemsUrl}/searchByTitle/${term}`;
    if (!term.trim()) {
      // return empty if no search term
      return of([]);
    }
    return this.http.get<Item[]>(url).pipe(
      tap(_ => this.log(`searched item string=${term}`)),
      catchError(this.handleError<Item[]>('searchItem: ' + term,[]))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.logService.add('ItemService: ' + message);
  }
}
