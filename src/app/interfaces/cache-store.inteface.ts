import { Country } from "./pais.interface";
import { continents } from 'src/app/interfaces/continent.type';

export interface cacheStore{
    byCapital: terms;
    byName:terms;
    byContinent: continentsCountry;
}
export interface terms {
    term: string;
    Country: Country[];
}
export interface continentsCountry {
    continent?: continents;
    Country: Country[]
}