import { Component, OnInit, Output } from '@angular/core';
import { PaisService } from '../../Service/pais.service';
import { Country } from 'src/app/interfaces/pais.interface';
import { pais } from '../by-continent-page/by-continent-page.component';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit{
  historial: string = '';
  paises:Country[] = [];
  cargando: boolean = false;

  constructor(private service:PaisService){
  }

  ngOnInit(): void {
    this.paises = this.service.cacheHistory.byName.Country
    this.historial = this.service.cacheHistory.byName.term
  }

  searchBy(term:string){
    this.cargando = true;
    this.service.searchByName(term).subscribe( countries => {
      this.paises = countries
      this.cargando = false;
    });
  }
}
