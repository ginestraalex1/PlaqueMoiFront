import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {


  constructor(private authService: AuthService, private router : Router) {
      
   }

  ngOnInit(): void {
  }

  getIsAuth(): boolean{
    return this.authService.isAuth;
  }

}
