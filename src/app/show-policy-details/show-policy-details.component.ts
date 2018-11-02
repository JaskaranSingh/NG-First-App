import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetails } from '../policy-details';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  page = 0;
  srchName = '';
  policyList: PolicyDetails[];
  idxPos: number;
  toggleForm = false;
  showUp = true;
  showDown = false;

  @ViewChild('f') form: any;

  policyData: PolicyDetails = {
    id: 0,
    policyHolderName: '',
    policyAmount: 0,
    maturityDate: new Date()
  };

  buttonText = 'Add';

  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.getPolicies().subscribe(data => this.policyList = data, err=> console.log(err));
  }

  showForm() {
    this.toggleForm = !this.toggleForm;
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
  }

  submit() {

    if (this.buttonText.toLowerCase() == 'update') {
      this.service.updatePolicy(this.policyData).subscribe(resp => {
        this.policyList[this.idxPos] = resp;        
      });
    }

    else {
    this.service.addPolicy(this.policyData).subscribe(resp => {
      this.policyList.push(resp);      
    });
  }
  this.form.reset();
    console.log(this.policyData);
  }

  update(policy) {
    console.log('update called');

    if(!this.toggleForm) {
      this.showForm();
    }

    this.idxPos = this.policyList.indexOf(policy);

    this.buttonText = 'Update';

    this.policyData = policy;

  }

  delete(policy) {
    console.log('delete called');
    
    this.idxPos = this.policyList.indexOf(policy);

    this.service.removePolicy(policy).subscribe(resp => {
      this.policyList.splice(this.idxPos, 1);
    });
  }
}
