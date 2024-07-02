import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContinentPageComponent } from './pages/by-continent-page/by-continent-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {path: 'country', component: ByCountryPageComponent},
  {path: 'capital', component: ByCapitalPageComponent},
  {path: 'continente', component: ByContinentPageComponent},
  {path: 'by/:id', component: CountryPageComponent},

  {path: '**', redirectTo: 'paises'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class PaisesRoutingModule { }
