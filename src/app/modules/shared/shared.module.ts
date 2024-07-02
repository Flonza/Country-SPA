import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBardComponent } from './components/slider-bard/slider-bard.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    SliderBardComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SliderBardComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
