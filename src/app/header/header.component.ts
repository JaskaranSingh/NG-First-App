import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading: string;
  logo: string;
  linkText: string;
  links: PageLink[];

  constructor() {
    this.majHeading = 'MinBapa Insurance';
    this.logo = 'assets/images/logo.png';
    this.linkText = 'Login';
    this.links = [
      // {text: 'Home' , style:'nav-link', ref:'home'},
      {text: 'Products' , style:'nav-link', ref:'products'},
      {text: 'History' , style:'nav-link', ref:'history'},
      {text: 'Advisors' , style:'nav-link', ref:'advisors'},
      {text: 'Get Quote' , style:'nav-link', ref:'quotation'},
      {text: 'Branches' , style:'nav-link', ref:'branches'}
    ];
   }

  ngOnInit() {
  }

}
