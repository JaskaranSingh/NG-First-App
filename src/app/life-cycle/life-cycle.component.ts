import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterViewInit {

  user: string = 'Jassi';
  constructor() {
    console.log('Inside Contructor');
   }

  ngOnInit() {
    console.log('Inside on init');
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }
}
