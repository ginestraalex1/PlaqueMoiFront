import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User.model";

@Injectable()
export class AuthService{
    
    constructor(private httpClient: HttpClient){}

    isAuth = false;

    isSignedIn() : boolean {
        return this.isAuth;
    }


    signIn(user: User): Observable<Object>{
        return this.httpClient.post('http://localhost:9000/Session/SignIn', user, {responseType: 'text'});
    };

    signOut(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.isAuth = false;
                resolve(true);
            }, 500);
        });
    };

    singUp(user: User){
        console.log("user :" +user);
    };
}