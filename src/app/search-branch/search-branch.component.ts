import { Component, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  searchCity: string;
  branchList: string[];
  addedComponent: ShowLocationComponent;

  @ViewChild('locationInfo', {read: ViewContainerRef}) viewRef: ViewContainerRef;

  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  onReceive(val) {
    this.branchList = val;
  }

  addComponent() {
    this.service.setViewRef(this.viewRef);

    this.addedComponent = this.service.addComponent(ShowLocationComponent).instance;

    this.addedComponent.selectedLocation.subscribe(value => 
      {
        this.searchCity = value;
        if(value != '')
          this.removeComponent();
      }
      );
      
  }

  removeComponent() {
    this.service.removeComponent();
  }
}
