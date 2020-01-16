import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {

  ngOnInit(): void {
    this.count = 0
  }

  count: number = 0;

  constructor() { }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
