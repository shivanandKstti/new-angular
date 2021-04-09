import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue],
    }, {
      Validators: PasswordChecker('password', 'confirmPassword'),
    });
  }

  get formValidator() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = !this.submitted;
    if (this.registerForm.invalid) {
      return;
    }


  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
}
