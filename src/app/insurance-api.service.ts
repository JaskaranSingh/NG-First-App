import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisors } from './insurance-advisors';
import { PolicyDetails } from './policy-details';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseURL = 'http://localhost:3000/';

  header = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisors[]> {
    const advisorURL = `${this.baseURL}advisors`;
    console.log(advisorURL);
    return this.http.get<InsuranceAdvisors[]>(advisorURL);      
  }

  getPolicies(): Observable<PolicyDetails[]> {
    const policyURL = `${this.baseURL}lifeInsurance`;
    console.log(policyURL);
    return this.http.get<PolicyDetails[]>(policyURL);      
  }

  addPolicy(policy: PolicyDetails): Observable<PolicyDetails>{
    return this.http.post<PolicyDetails>(`${this.baseURL}lifeInsurance`, policy, {headers: this.header});
  }

  removePolicy(policy: PolicyDetails): Observable<PolicyDetails> {
     return this.http.delete<PolicyDetails>(`${this.baseURL}lifeInsurance/${policy.id}`, {headers: this.header});
  }

  updatePolicy(policy: PolicyDetails): Observable<PolicyDetails>{
    return this.http.put<PolicyDetails>(`${this.baseURL}lifeInsurance/${policy.id}`, policy, {headers: this.header});
  }
}
