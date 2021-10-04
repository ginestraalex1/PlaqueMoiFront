import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  unTitre : string = 'Nav-bar';
  isAuth : boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  getStatus() : string {
    return this.unTitre;
  }

  getIsAuth(): boolean{
    return this.isAuth;
  }

  onConnect() : void{
    this.isAuth = !this.isAuth;
  }

}
