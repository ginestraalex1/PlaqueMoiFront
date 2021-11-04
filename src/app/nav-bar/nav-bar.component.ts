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

  onSignOut() : void{
    var subscription = this.authService.signOut().subscribe(()=>{
      this.authService.isAuth = false;
      localStorage.removeItem('plaquemoiToken');
      localStorage.removeItem('plaquemoiId');
      subscription.unsubscribe();
      this.router.navigate(['welcome']);
    });  
  }
}
