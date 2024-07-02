import { Component, Input } from '@angular/core';
import { pais } from '../../pages/by-continent-page/by-continent-page.component';
import { Country } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-table-paises',
  templateUrl: './table-paises.component.html',
  styleUrls: ['./table-paises.component.css']
})
export class TablePaisesComponent {
  @Input()
  paises: Country[] = []
  @Input()
  cargando: boolean = false;
  page: number = 1;


  constructor(){

  }
  trackByCcn3(index: number, pais: Country): string {
    return pais.ccn3;
  }
}
