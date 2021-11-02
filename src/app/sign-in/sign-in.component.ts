import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn(form: NgForm) : void{
    console.log(form.value);
    this.authService.signIn().then(()=>{
      this.router.navigate(['conversations']);
    });
  }

  getIsAuth(): boolean{
    return this.authService.isAuth;
  }

}
