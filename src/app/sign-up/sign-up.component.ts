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

  constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router) {
    this.userForm = formBuilder.group({
      plateNumber : ['', Validators.required],
      lastName : ['', Validators.required],
      firstName : ['', Validators.required],
      userName : ['', Validators.required],
      userEmail : ['', [Validators.required, Validators.email]],
      userPassword : ['', Validators.required],
      userPasswordConfirmation : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSignUp(): void{
    const newUser = this.userForm.value;
    this.userService.signUp(new User(newUser['plateNumber'],
      newUser['lastName'],
      newUser['firstName'],
      newUser['userName'],
      newUser['userEmail'],
      newUser['userPassword'])
    ).then(()=>{
        this.router.navigate(['welcome']);
    });
  }

}
