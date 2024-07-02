import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../Service/pais.service';
import { switchMap } from 'rxjs';
import { Country } from '../../../../interfaces/pais.interface';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

  pais?:Country;
  

  constructor(private active:ActivatedRoute, private service:PaisService, 
    private router:Router){

  }
  ngOnInit(): void {
    this.active.params.pipe(
      switchMap(({id}) => this.service.searchCountryInfo(id))
    ).subscribe(pais=> {
      //Comprovacion de la existencia del pais
      if (!pais){
        return this.router.navigateByUrl('')
      } 
      else{
        return this.pais = pais;
      }
    })
  }
}
