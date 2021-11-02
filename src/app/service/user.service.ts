import { User } from "../models/User.model";

export class UserService{

    signUp(user : User) : Promise<boolean> {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(true);
            }, 1000);
        });
    }
}