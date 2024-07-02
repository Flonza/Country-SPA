import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SliderBardComponent } from './components/slider-bard/slider-bard.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SliderBardComponent,
    ContactComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    HomePageComponent,
    AboutPagesComponent,
    SliderBardComponent,
    ContactComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
