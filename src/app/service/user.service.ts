import { User } from "../models/User.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    constructor(private httpClient : HttpClient){}

    signUp(user : User) : Observable<Object> {
        return this.httpClient.post('http://localhost:9000/User', user, {responseType: 'text'});
    }
}