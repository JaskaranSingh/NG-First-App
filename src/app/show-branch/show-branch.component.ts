import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName: string;
  @Output() branches: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() { 
    console.log(this.cityName);
  }

  ngOnInit() {
    console.log(this.cityName);
  }

  sendBranches() {
    if(this.cityName.toLowerCase() == "hyd")
    this.branches.emit(['Lingampally','Madhapur','Miyapur', 'Kondapur']);
    else
    this.branches.emit(['Anna Nagar','Nehru Nagar','Gandhi Nagar', 'Singh Nagar']);
  }
}
