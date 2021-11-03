import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userForm: FormGroup;

  private wrongPassword : boolean = false;
  private wrongPasswordTimer : any;

  constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router) {
    this.userForm = formBuilder.group({
      plateNumber : ['', Validators.required],
      lastName : ['', Validators.required],
      firstName : ['', Validators.required],
      userName : ['', Validators.required],
      userEmail : ['', [Validators.required, Validators.email]],
      userPassword : ['', Validators.required, ],
      userPasswordConfirmation : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSignUp(): void{
    if(this.wrongPasswordTimer){
      clearTimeout(this.wrongPasswordTimer);
    }
    const newUser = this.userForm.value;
    var userTemp = new User(newUser['plateNumber'],
                            newUser['userPassword'],
                            newUser['lastName'],
                            newUser['firstName'],
                            newUser['userName'],
                            newUser['userEmail']);
    if(newUser['userPassword'] != newUser['userPasswordConfirmation']){
      this.wrongPassword = true;
      this.wrongPasswordTimer = setTimeout(() => {
        this.wrongPassword = false;
      },1500);
    } 
    else{  
      var subscription = this.userService.signUp(userTemp).subscribe((data) => {
        subscription.unsubscribe();
        this.router.navigate(['signin']);
      }, (error)=>{
        console.log(error);
      });
    }                   
  }

  isWrongPassword(): boolean{
    return this.wrongPassword;
  }

}
