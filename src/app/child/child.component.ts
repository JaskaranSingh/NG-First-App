import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name: string;

  constructor() {
    console.log('child contructor called');
    console.log('input prop in const: ' + this.name);
   }

  ngOnInit() {
    console.log('child onInit called');
    console.log('input prop in onInit: ' + this.name);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('Previous Value: ' + change.name.previousValue);
    console.log('Current Value: ' + change.name.currentValue);   
  }

}
