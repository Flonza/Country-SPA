import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/pais.interface';
import { PaisService } from '../../Service/pais.service';
import { pais } from '../by-continent-page/by-continent-page.component';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {
  historial: string = '';
  paises:Country[] = [];
  cargando: boolean = false;

  constructor(private service:PaisService){
  }

  ngOnInit(): void {
    this.historial = this.service.cacheHistory.byName.term
    this.paises = this.service.cacheHistory.byName.Country
  }

  searchBy(term:string){
    this.cargando = true;
    this.service.serchByCapital(term).subscribe( countries => {
      this.paises = countries
      this.cargando = false;
    });
  } 
}
