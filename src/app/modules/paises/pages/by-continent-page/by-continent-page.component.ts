import { Component, OnInit } from '@angular/core';
import { Country, Flags, Name } from 'src/app/interfaces/pais.interface';
import { PaisService } from '../../Service/pais.service';
import { continents } from 'src/app/interfaces/continent.type';

export interface pais {
  id: number;
  name:         Name;
  capital:      string[];
  flag:         string;
  population:   number;
  flags:        Flags;
  ccn3: string;
}



@Component({
  selector: 'app-by-continent-page',
  templateUrl: './by-continent-page.component.html',
  styleUrls: ['./by-continent-page.component.css']
})
export class ByContinentPageComponent implements OnInit{

  continentes:continents[] = ['Americas', 'Europe', 'Africa', 'Oceania', 'Asia'];
  continenteActual?:continents;
  paises:Country[] = [];
  cargando: boolean = false;

  constructor(private service:PaisService){
  }

  ngOnInit(): void {
    this.paises = this.service.cacheHistory.byContinent.Country;
  }

  searchBy(region:continents){
    this.continenteActual = region;
    this.cargando = true;
    this.service.searchByContinent(region).subscribe( countries => {
      this.paises = countries
      this.cargando = false;
    });
  }
}
