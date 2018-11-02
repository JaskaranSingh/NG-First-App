import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  loginForm: FormGroup;
  frmConfig: any = [
    {type:'text', name:'userName', label: 'User Name', constraint: Validators.required},
    {type:'password', name:'passWord', label: 'Password', constraint: Validators.required}
  ];

  constructor(private service: ComponentCommunicationService, private frmBuilder: FormBuilder,
    private router: Router, private loginRoute: ActivatedRoute) { 
    
    this.loginForm =  this.frmBuilder.group({});
  }

  ngOnInit() {

    this.loginRoute.params.subscribe(params => this.errorMsg = params['msg']);

    this.frmConfig.forEach(element => {
      this.loginForm.addControl(element.name, new  FormControl('', {validators: element.constraint}));
    });
  }

  validate() {
    console.log(this.loginForm.value);

    const uname = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.passWord.value;

    if(uname == 'india' && pwd == 'india') {
      sessionStorage.setItem('logged', 'true');
      this.router.navigate(['products']);
    }
    else {
      this.errorMsg = 'Invalid Username or Password';
    }

    this.service.changeMessage('logged');    
  }

}
