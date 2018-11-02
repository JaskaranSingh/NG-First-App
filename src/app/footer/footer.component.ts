import { Component, OnInit } from '@angular/core';
import {PageLink} from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText: string;
  logoLinks: PageLink[]; 
  constructor() { 
    this.footerText = 'Follow Us on';
    //this.logoLinks = [{text = 'Twitter' , style:'fa fa-2x fa-twitter'}]
    //this.logoLinks = ['Twitter', 'Facebook', 'Instagram'];
    this.logoLinks = [
      {text: 'Twitter' , style:'fa fa-2x fa-twitter', ref: 'http://www.twitter.com'},
      {text: 'Facebook' , style:'fa fa-2x fa-facebook', ref: 'http://www.fb.com'},
      {text: 'Instagram' , style:'fa fa-2x fa-instagram', ref: 'http://www.instagram.com'}
  ]
  }

  ngOnInit() {
  }

}
