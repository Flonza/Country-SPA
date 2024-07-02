import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesRoutingModule } from './paises-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContinentPageComponent } from './pages/by-continent-page/by-continent-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';
import { TablePaisesComponent } from './components/table-paises/table-paises.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByContinentPageComponent,
    ByCountryPageComponent,
    CountryPageComponent,
    TablePaisesComponent,

  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule,
    NgxPaginationModule,
    TranslateModule.forRoot({defaultLanguage: 'es'})
  ]
})
export class PaisesModule { }
