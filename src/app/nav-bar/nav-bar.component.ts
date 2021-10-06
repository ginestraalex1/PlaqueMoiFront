import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  getIsAuth(): boolean{
    return this.authService.isAuth;
  }

  onSignIn() : void{
    this.authService.signIn();
  }

  onSignOut() : void{
    this.authService.signOut().then(()=>{
      this.router.navigate(['welcome']);

    });  

  }

}
