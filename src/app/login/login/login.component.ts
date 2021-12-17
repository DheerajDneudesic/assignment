import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isSubmitted: boolean = false;

  // user: User = new User();
  

  constructor( private formBuilder: FormBuilder, private authService : LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  get signUpForm(){
    return this.form.controls;
  }

   onSubmit(){
     let userData 
     let u
    this.isSubmitted = true;
    if(this.form.invalid){
      return
    }
    this.authService.loginUser(this.form.value).subscribe((data: any) => {
      userData = data.isRole;
      if(userData){
        this.router.navigate(['/home',{id: userData}]);
      }
      localStorage.setItem('role', userData);
    },error => {
      alert('error')
    })
  }
   
}
