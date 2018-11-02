import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Policy } from './policy';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit, AfterViewInit {
  
  @ViewChild(TestimonyComponent) testimonyCompRef: TestimonyComponent;
  @ViewChildren('section') sectionList: QueryList<any>;

  policies: Policy[];
  feedback2: string;
  feedback1: string;
  constructor(private ref: ChangeDetectorRef) { 
    this.policies = [
      {policyName: 'JEEVAN PRAGATI', policySummary: 'LIC\'s Jeevan Pragati Plan is a non-linked, with - profits plan which offers a combination of protection and savings. This plan provides for automatic increase in risk cover after every five years during the term of the policy. In addition, this plan also takes care of liquidity needs through loan facility.'},
      {policyName: ' Jeevan Labh', policySummary: 'LIC\'s Jeevan Labh is a limited premium paying, non-linked, with-profits endowment plan which offers a combination of protection and savings. This plan provides financial support for the family in case of unfortunate death of the policyholder any time before maturity and a lump sum amount at the time of maturity for the surviving policyholder.'}
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.feedback1 = this.testimonyCompRef.getCorpCustomerFeedBack();
    this.feedback2 = this.testimonyCompRef.getRetailCustomerFeedBack();

    this.ref.detectChanges();

    console.log(this.sectionList);
  }

}
