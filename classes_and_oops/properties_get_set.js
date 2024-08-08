function User(email,password) {
    this.email = email
    this.password = password

    // basically object.defineProperty is a getter and setters in object for function as function based getters and setters 

    Object.defineProperty(this,'email',{     
        get: function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this.value = value;
        }
    })
    Object.defineProperty(this,'password',{     
        get: function(){
            return this._password.toUpperCase();
        },
        set : function(value){
            this.value = value;
        }
    })
}

const aman = new User("aman@gmail.com","aman")
console.log(aman.email);
