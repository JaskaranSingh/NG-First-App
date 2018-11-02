import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedBack(): string {
    return "Claims processing is prompt and received payment within a week";
  }

  getCorpCustomerFeedBack() : string{
    return "Doorstep services are good. Happy with the service.";
  }

}
