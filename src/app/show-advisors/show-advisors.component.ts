import { Component, OnInit } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { InsuranceAdvisors } from '../insurance-advisors';

@Component({
  selector: 'app-show-advisors',
  templateUrl: './show-advisors.component.html',
  styleUrls: ['./show-advisors.component.css']
})
export class ShowAdvisorsComponent implements OnInit {

  advisorList: InsuranceAdvisors[];
  constructor(private service:InsuranceAPIService) { }

  ngOnInit() {
    this.service.findAllAdvisors().subscribe(data => this.advisorList = data, err => console.log(err));
  }
}
