import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private wrongPassword : boolean = false;
  private wrongPasswordTimer : any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn(form: NgForm) : void{
    if(this.wrongPasswordTimer){
      clearTimeout(this.wrongPasswordTimer);
    }
    console.log(form.value);
    var subscription = this.authService.signIn(new User(
        form.value['plateNumber'],
        form.value['password']
      )
    ).subscribe((data)=>{
      console.log(data.toString());
      //localStorage.setItem("plaquemoiToken", data.toString());
      
    }, (error)=>{
      this.wrongPassword = true;
      this.wrongPasswordTimer = setTimeout(() => {
        this.wrongPassword = false;
      },2000);
      console.log(error);
    });
  }

  getIsAuth(): boolean{
    return this.authService.isAuth;
  }

  isWrongPassword(): boolean{
    return this.wrongPassword;
  }

}
