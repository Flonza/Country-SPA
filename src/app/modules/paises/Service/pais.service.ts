import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Country } from 'src/app/interfaces/pais.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { cacheStore } from 'src/app/interfaces/cache-store.inteface';
import { continents } from 'src/app/interfaces/continent.type';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private url:string = 'https://restcountries.com/v3.1'
  
  public cacheHistory:cacheStore = {
    byCapital: {term: '', Country: []},
    byName: {term: '', Country: []},
    byContinent: {continent: '', Country: []}
  }

  constructor(private http: HttpClient ) {
    this.loadFromLocalStorage();
  }

  //Guardar informacion en el local storage
  private saveToLocalStorage() {
    localStorage.setItem( 'cacheHistory', JSON.stringify( this.cacheHistory ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheHistory') ) return;

    this.cacheHistory = JSON.parse( localStorage.getItem('cacheHistory')! );
  }

  private getCountryRequest(url: string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(catchError(error=> of([])),
      delay(1000));
  }

  //Busquedas
  searchByName(nombre:string):Observable<Country[]>{
    const url = `${this.url}/name/${nombre}`;
    return this.getCountryRequest(url).pipe( tap(paises => this.cacheHistory.byName =  {term: nombre, Country: paises})
    , tap( () => this.saveToLocalStorage() ),);
  }

  searchByContinent(contiente:continents):Observable<Country[]>{
    const url = `${this.url}/region/${contiente}`;
    return this.getCountryRequest(url).pipe( tap(paises => this.cacheHistory.byContinent =  {continent: contiente, Country: paises})
    , tap( () => this.saveToLocalStorage() ),);
    
  }

  serchByCapital(capital:string):Observable<Country[]>{
    const url = `${this.url}/capital/${capital}`;
    return this.getCountryRequest(url).pipe( tap(paises => this.cacheHistory.byCapital =  {term: capital, Country: paises})
    , tap( () => this.saveToLocalStorage() ),);
  }

//Busca paises de manera mas especifica y transforma los datos de retorno de array a un objeto
  searchCountryInfo( code: string):Observable<Country | null>{
    const url = `${this.url}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map(paises => paises.length > 0 ? paises[0] : null),
      catchError(error=> of(null)));
  }
}
