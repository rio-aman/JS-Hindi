class User{
    constructor(email,password){
        this.email = email;
        this.password = password

    }
        //constructor and set both are setting the values that's why error comes 

    // set password(password){          // this error will come Maximum call stack size exceeded at running time 
    //     this.password = password.toUpperCase()
    // }

    // get password(){
    //     return this.password.toUpperCase()
        
    // }

    set password(password){          
        this._password = password.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
        
    }

    set email(email){          
        this._email = email   // here only email setting 
    }

    get email(){
        return this._email.toUpperCase()
        //but here email convert to upper case and send to us 
    }
}

const aman  = new User("aman@gmail.in.com","aman")
console.log(aman.password);
console.log(aman.email);
