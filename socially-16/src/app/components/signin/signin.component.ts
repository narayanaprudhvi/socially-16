import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers : [MessageService]
})
export class SigninComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;

  loginData = 'showLoginForm';

  data: any;

  ngOnInit(){
    // this.getNewss();
  }

  // getNewss(){
  // this.common.getNews().subscribe((news) =>{
  //   console.log(news, ":............");

  // })
  // }

  constructor(public fb: FormBuilder, public router : Router, private messageService: MessageService,) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  login(){

  }

  eyesOffOn: boolean = true;

  showAndHidePassword() {
    this.eyesOffOn = !this.eyesOffOn;
  }
  onLoginSubmit() {
    // window.scrollTo(0, 0);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login Successfully',
    });
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
    
  }

  signupNavigation(){
    this.router.navigateByUrl('/signup')
  }

  showSIGNUPform(){
    // this.router.navigateByUrl('/signup');
    this.loginData = 'showSignUpForm';
    window.scrollTo(0, 0);
  }

  mobileNumber : any;
  otpotp : any;
  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
