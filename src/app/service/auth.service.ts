import { User } from "../models/User.model";

export class AuthService{
    
    isAuth = false;

    isSignedIn() : boolean {
        return this.isAuth;
    }


    signIn(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(true);
            }, 1000);
        });
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