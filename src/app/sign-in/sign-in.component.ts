import { Component, Input, OnInit } from '@angular/core';
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

  onSignIn() : void{
    this.authService.signIn().then(()=>{
      this.router.navigate(['welcome']);
    });
  }

  getIsAuth(): boolean{
    return this.authService.isAuth;
  }

}
