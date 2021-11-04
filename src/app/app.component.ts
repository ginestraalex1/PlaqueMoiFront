import { Component } from '@angular/core';
import { Session } from './models/Session.model';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plaqueMoiFront';

  constructor(public authService : AuthService){
  }

  ngOnInit(){
    if(localStorage.getItem('plaquemoiId') && localStorage.getItem('plaquemoiToken')){
      var sessionTemp = new Session(
        localStorage.getItem('plaquemoiId')?.toString(), 
        localStorage.getItem('plaquemoiToken')?.toString());
      var subscription =this.authService.sessionCheck(sessionTemp).subscribe((data)=> {
          this.authService.isAuth = true;
      },
      (error) => {
        this.authService.isAuth = false;
      });
    }
    
  }
}
