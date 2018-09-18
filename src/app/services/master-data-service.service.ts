import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MasterDataServiceService {

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
  private masterDataUrl = 'http://localhost:8000/masterdata';  // URL to web api
  
  /** Log a MasterDataServiceService message with the MessageService */
	private log(message: string) {
  	 this.messageService.add(`HeroService: ${message}`);
	}

 /** GET heroes from the server */
  getMasterData (): Observable<any[]> {
    return this.http.get<any[]>(this.masterDataUrl)
    .pipe(
      
      catchError(this.handleError('getMasterData', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
