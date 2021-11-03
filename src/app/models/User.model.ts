export class User{
    constructor(
        public plateNumber: string,
        public password: string,
        public lastName?: string,
        public firstName?: string,
        public userName?: string,
        public email?: string){}    
}