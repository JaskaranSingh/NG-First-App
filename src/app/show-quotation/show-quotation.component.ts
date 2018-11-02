import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quotation',
  templateUrl: './show-quotation.component.html',
  styleUrls: ['./show-quotation.component.css']
})
export class ShowQuotationComponent implements OnInit {

  isDisabled  = false;
  age = 18;
  suggestedPolicy: string;
  constructor() { }

  ngOnInit() {
  }

  showPolicy() {
    if (this.age > 30) 
      this.suggestedPolicy = 'Jeevan Aanad';
      else
      this.suggestedPolicy = 'Jeevan Akshay';
    console.log('policy details');
  }
  
  changeStatus() {
    if(this.age >= 18)
      this.isDisabled = false;
      else
      this.isDisabled = true;
  }

}
