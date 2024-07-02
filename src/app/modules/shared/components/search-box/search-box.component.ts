import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit, OnDestroy{  
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscripcion?: Subscription;
  @Input()
  placeholder:String = '';
  @Output()
  onValue = new EventEmitter<string>();
  @Output()
  onDebounce = new EventEmitter<string>();
  @Input()
  valorInicial: string = '';
 
  ngOnInit(): void {
    this.debouncerSuscripcion = 
    this.debouncer.pipe(debounceTime(800))
    .subscribe( term => {
      this.onDebounce.emit(term)
      console.log("Bucando: " + term)
    })
  }

  teclaPrecionada(term: string){
    this.debouncer.next(term)
  }

  ngOnDestroy(): void {
    this.debouncerSuscripcion?.unsubscribe;
  }
}
