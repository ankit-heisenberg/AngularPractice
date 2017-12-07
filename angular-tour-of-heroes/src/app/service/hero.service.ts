import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
 private heroesUrl = 'api/heroes';
  constructor(
    private http : HttpClient,
    private messageService : MessageService
  ) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService : Fetched All Heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.log("Fetched Heroes")),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
  }

  getHero(id: number) : Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`Fetched Hero ID:${id}`)),
      catchError(this.handleError<Hero>(`getHero id:${id}`))
    );
  }

  updateHero(hero : Hero) : Observable<any>{
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero : Hero) : Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero:Hero)=> this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero : Hero | number) : Observable<Hero>{
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url , httpOptions).pipe(
      tap(_ => this.log(`Deleted Hero ID:${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
     if (!term.trim()) {
       // if not search term, return empty hero array.
      return of([]);
     }
     return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }
  
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
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