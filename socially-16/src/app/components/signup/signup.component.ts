import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required,],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  eyesOffOn: boolean = true;

  showAndHidePassword() {
    this.eyesOffOn = !this.eyesOffOn;
  }
  onSignupSubmit(){ 
    this.router.navigateByUrl('/login');
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
