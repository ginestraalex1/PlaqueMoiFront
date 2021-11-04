import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User.model";
import { Session } from "../models/Session.model";

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

    signOut(): Observable<Object>{
        return this.httpClient.delete('http://localhost:9000/Session/SignOut/'+localStorage.getItem('plaquemoiId'));
    };

    sessionCheck(session: Session): Observable<Object>{
        return this.httpClient.post('http://localhost:9000/Session/TokenValidity', session, {responseType: 'text'});
    }

}